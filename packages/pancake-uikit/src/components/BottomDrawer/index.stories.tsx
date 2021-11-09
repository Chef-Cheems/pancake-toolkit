import React, { useState } from "react";
import Box from "../Box/Box";
import Button from "../Button/Button";
import Text from "../Text/Text";
import BottomDrawer from "./index";

export default {
  title: "Components/BottomDrawer",
  component: BottomDrawer,
  argTypes: {},
};

export const Default: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const content = (
    <Box px="16px" pt="22px" height="100%" overflowY="auto">
      <Text fontSize="20px">Example</Text>
      <Text mb="16px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio et laudantium ipsum ipsam nesciunt, odio
        hic quibusdam molestias magnam. Tempora saepe ea quidem quo, commodi sint tempore iste explicabo!
      </Text>
      <Text mb="16px">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dicta adipisci quas illum necessitatibus! Tempora
        minus reiciendis at libero veniam fugiat, beatae expedita delectus eaque laudantium, fuga nulla impedit? Est.
      </Text>
      <Text mb="16px">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dicta adipisci quas illum necessitatibus! Tempora
        minus reiciendis at libero veniam fugiat, beatae expedita delectus eaque laudantium, fuga nulla impedit? Est.
      </Text>
      <Text mb="16px">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dicta adipisci quas illum necessitatibus! Tempora
        minus reiciendis at libero veniam fugiat, beatae expedita delectus eaque laudantium, fuga nulla impedit? Est.
      </Text>
      <Text mb="16px">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dicta adipisci quas illum necessitatibus! Tempora
        minus reiciendis at libero veniam fugiat, beatae expedita delectus eaque laudantium, fuga nulla impedit? Est.
      </Text>
      <Text>The end</Text>
    </Box>
  );
  return (
    <Box p="24px">
      <Text mb="8px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus dolorum porro facere cum ducimus, iste
        nobis voluptas dolorem quaerat perspiciatis voluptatum sed laborum reiciendis magnam illum necessitatibus. Ea,
        hic.
      </Text>
      <Button onClick={() => setIsOpen(true)}>Show bottom drawer</Button>
      <BottomDrawer content={content} isOpen={isOpen} setIsOpen={setIsOpen} />
    </Box>
  );
};
