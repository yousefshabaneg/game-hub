import { HStack, List, ListItem, Skeleton } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <List>
      <ListItem paddingY="5px">
        <HStack>
          <Skeleton boxSize="32px" borderRadius={8} />
          <Skeleton width="50px" height="20px" borderRadius={5} />
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreSkeleton;
