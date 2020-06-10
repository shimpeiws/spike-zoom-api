import * as React from "react";
import axios from "axios";

interface Props {
  location: {
    search: string;
  };
}

export function Callback(props: Props) {
  React.useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    const code = query.get("code");
    console.info("code", code);
    const request = async () => {
      const client = axios.create({
        baseURL: "https://YOUR-API-ENDPOINT",
        responseType: "json",
      });
      const res = await client.post("/zoom", {
        code: code,
      });
      console.info("res", res);
    };
    request();
  }, []);

  return (
    <>
      <h1>Callback</h1>
    </>
  );
}
