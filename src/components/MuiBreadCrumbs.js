import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


export function MuiBreadCrumbs() {
  return (
    <>
      <Breadcrumbs>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>

        <Link underline="hover" color="inherit" href="/products">
          Products
        </Link>

        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs separator="›">
        <Link href="/">Home</Link>
        <Link href="/library">Library</Link>
        <Typography>Data</Typography>
      </Breadcrumbs>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
        <Link href="/">Home</Link>
        <Link href="/admin">Admin</Link>
        <Typography>Users</Typography>
      </Breadcrumbs>    
    </>
  );
}
