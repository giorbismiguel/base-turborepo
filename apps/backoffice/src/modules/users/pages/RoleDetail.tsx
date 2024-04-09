import Box from '@mui/material/Box';
import { useUser } from "security";

export default function RoleDetail() {
  const { user, isLoading } = useUser()

  return (
    <Box sx={{ width: '100%' }}>
      <pre>{JSON.stringify(isLoading, null, 2)}</pre>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Box>
  );
}
