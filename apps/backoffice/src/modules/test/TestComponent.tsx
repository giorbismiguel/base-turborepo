import { memo } from "react";
import { MenuItem, Stack } from "@mui/material";
import { IconDropDown, StatusPicker } from "mui-react-common";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useToggle } from "hook-utils";

function TestComponent() {
  const { isOpen, onOpen, onClose } = useToggle();
  const handleOnChange = () => {
    1 + 1;
  };

  return (
    <Stack mt={4} spacing={2}>
      test page
      <StatusPicker
        name="pepe"
        onChange={handleOnChange}
        options={[]}
        value={{ _id: "1", color: "#ab33a7", title: "pepe" }}
      />
      <StatusPicker
        name="pepe"
        onChange={handleOnChange}
        options={[]}
        readOnly
        value={{ _id: "1", color: "#ab33a7", title: "pepe" }}
      />
      <IconDropDown
        icon={<MoreHorizIcon />}
        onClose={onClose}
        onOpen={onOpen}
        open={isOpen}
        tooltip="menu"
      >
        <MenuItem onClick={onClose}>Profile</MenuItem>
        <MenuItem onClick={onClose}>My account</MenuItem>
        <MenuItem onClick={onClose}>Logout</MenuItem>
      </IconDropDown>
    </Stack>
  );
}

export default memo(TestComponent);
