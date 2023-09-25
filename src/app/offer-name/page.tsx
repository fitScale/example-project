"use client";

import headOrTails from "@/helpers/functions/headsOrTails";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Routing = () => {
  const router = useRouter();

  useEffect(() => {
    // if (headOrTails()) {
    //   router.push("/offer-name/v1");
    // } else {
    //   router.push("/offer-name/v2");
    // }

    router.push("/offer-name/v1");
  }, []);

  return <div></div>;
};

export default Routing;
