import * as React from "react";

interface Props {}

export function Top(_: Props) {
  return (
    <>
      <h1>Top</h1>
      <a href="https://zoom.us/oauth/authorize?response_type=code&client_id=your-client-id&redirect_uri=your-redirect-uri">
        Zoom OAuth
      </a>
    </>
  );
}
