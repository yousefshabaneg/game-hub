import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { NavLink, isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  const isInvalidPage = isRouteErrorResponse(error);
  return (
    <>
      <NavBar />
      <Alert status={isInvalidPage ? "warning" : "error"} margin={5}>
        <AlertIcon />
        <AlertTitle>Oops!</AlertTitle>
        <AlertDescription>
          {isInvalidPage
            ? "This page does not exist."
            : "An unexpected error ocurred."}
        </AlertDescription>
        <Button colorScheme={isInvalidPage ? "orange" : "red"} marginX={3}>
          <NavLink to="/">Home Page</NavLink>
        </Button>
      </Alert>
    </>
  );
};

export default ErrorPage;
