import Styled from "@emotion/styled";
import { Box, Typography, IconButton } from "@mui/material";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import { DialogIconsData } from "../../../Data/DialogIconsData";

const CustomBox = Styled(Box)({
  width: "95%",
  padding: "10px",
  border: "1px solid rgb(235, 235, 235)",
  borderRadius: "7px",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "5px",
  marginTop: "10px",
});

const DialogIcons = ({ setSelectedImage }) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setSelectedImage(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <CustomBox>
      <Typography color={"#000"} fontWeight={700} paddingTop={1}>
        Add to your post
      </Typography>

      <Box>
        <label htmlFor="upload-image">
          <input
            id="upload-image"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
          <IconButton component="span">
            <PermMediaIcon color="success" />
          </IconButton>
        </label>

        {DialogIconsData.map(({ icon }) => (
          <IconButton>{icon}</IconButton>
        ))}
      </Box>
    </CustomBox>
  );
};

export default DialogIcons;
