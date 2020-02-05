/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default ScrollToTopOnMount;
