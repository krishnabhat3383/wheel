import React from "react";

import { Search, Plus, Settings } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

const Menubar = () => {
  return (
    <MenuBar showMenu title="Contacts">
      <MenuBar.Block label="All" count={200} active />
      <MenuBar.Block label="Archived" count={80} />
      <MenuBar.Block label="Completed" count={60} />
      <MenuBar.Block label="Phase 2" count={60} />
      <MenuBar.SubTitle iconProps={[{ icon: Search }]}>
        <Typography style="h5" textTransform="uppercase">
          Segments
        </Typography>
      </MenuBar.SubTitle>
      <MenuBar.SubTitle
        iconProps={[{ icon: Search }, { icon: Plus }, { icon: Settings }]}
      >
        <Typography style="h5" textTransform="uppercase">
          Tags
        </Typography>
      </MenuBar.SubTitle>
    </MenuBar>
  );
};

export default Menubar;
