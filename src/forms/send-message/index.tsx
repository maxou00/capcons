import { CaretDown } from "phosphor-react";
import { Box, Stack, Select, MenuItem } from "@mui/material";
import Input from "../../components/Input";
import { useRef } from "react";

export default function FormSendMessage() {
  const ref = useRef<HTMLDivElement | null>();
  return (
    <Stack width="100%" direction="column" spacing="20px">
      <Input placeholder="Your name" />
      <Input placeholder="E-mail" />
      <Select
        disableUnderline
        variant="standard"
        placeholder="Choose a subject"
        value={-1}
        inputProps={{
          placeholder: "Choose a subject",
        }}
        IconComponent={(prps) => (
          <Box px="8px">
            <CaretDown size={24} />
          </Box>
        )}
        sx={
          {
            background: "#f2f0ff",
            borderRadius: "10px",
            ".MuiSelect-select": {
              padding: "12px 30px",
              borderRadius: "10px",
              border: "1px solid transparent !important",
            },
          } as any
        }
      >
        <MenuItem value={-1}>Choose a subject</MenuItem>
        <MenuItem>Open a dispute</MenuItem>
        <MenuItem>Sell goodies</MenuItem>
      </Select>
      <Input multilines placeholder="Message" />
    </Stack>
  );
}
