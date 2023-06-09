import React, { useState } from "react";
import { Tabs, Tab, Box, Divider } from "@mui/material";

const ProfileTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ display: { xs: "none", md: "block " }, mt: "160px" }}>
      <Divider width={"70%"} sx={{ m: "10px auto" }} />
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="profile tabs"
        sx={{ m: "0px auto", width: "70%" }}
      >
        {["Posts", "About", "Friends", "Photos", "Videos", "Reels"].map(
          (tab) => {
            return (
              <Tab
                label={tab}
                color="#D3D3D3"
                sx={{ textTransform: "none", fontWeight: "700" }}
              />
            );
          }
        )}
      </Tabs>
    </Box>
  );
};

export default ProfileTabs;
