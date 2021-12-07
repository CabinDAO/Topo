import React, { useEffect } from "react";

const ConvertKit = ({ id }: { id: string }): React.ReactElement => {
  useEffect(() => {
    if (!document.getElementById(id)) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://prodigious-trader-7332.ck.page/${id}/index.js`;
      script.id = id;
      document.head.appendChild(script);
    }
  }, [id]);
  return <script data-uid={id} />;
};

export default ConvertKit;
