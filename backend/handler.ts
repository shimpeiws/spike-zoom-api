import { APIGatewayProxyHandler } from "aws-lambda";
import axios from "axios";
import request from "request";
import "source-map-support/register";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
};

const success = (body: any) => {
  return {
    statusCode: 200,
    headers: headers,
    body: JSON.stringify(body),
  };
};

const invalidRequest = () => {
  return {
    statusCode: 400,
    headers: headers,
    body: JSON.stringify({ errors: "Invalid Request" }),
  };
};

const internalServerError = (error: any) => {
  return {
    statusCode: 500,
    headers: headers,
    body: JSON.stringify({ errors: "Internal Server Error" }),
  };
};

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

export const zoomMe: APIGatewayProxyHandler = async (event, _context) => {
  if (!event.body) {
    return invalidRequest();
  }
  const body = JSON.parse(event.body);

  const code = body.code;

  const client = axios.create({
    baseURL: "https://zoom.us",
    headers: {
      Authorization: "Basic YOUR-BASE64-ENCODED-IDS", // https://marketplace.zoom.us/docs/guides/auth/oauth#getting-access-token
    },
  });
  try {
    const res = await client.post("/oauth/token", null, {
      params: {
        grant_type: "authorization_code",
        code: code,
        redirect_uri: "https://YOUR-CALLBACK-URL.com",
      },
    });
    console.info("res = ", res.data);
  } catch (error) {
    console.error("error", error);
  }

  return success("OK");
};
