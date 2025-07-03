import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Badge,
  Wrap, WrapItem, 
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";
import { useTranslation } from "react-i18next";

export default function About({ color }) {
  const {t}= useTranslation()
  const profile = ProfileArray();
  const badges = [
    { name: "React.js", colorScheme: "blue" },
    { name: "TypeScript", colorScheme: "cyan" },
    { name: "Flutter", colorScheme: "teal" },
    { name: "Tailwind CSS", colorScheme: "purple" },
    { name: "Redux", colorScheme: "pink" },
    { name: "i18n", colorScheme: "gray" },
    { name: "Material UI", colorScheme: "indigo" },
    { name: "Node.js", colorScheme: "green" },
    { name: "Express.js", colorScheme: "lime" },
    { name: "Handlebars.js", colorScheme: "yellow" },
    { name: "MongoDB", colorScheme: "green" },
    { name: "SQL", colorScheme: "orange" },
    { name: "Redis", colorScheme: "red" },
    { name: "Mocha", colorScheme: "brown" }, // pas dispo dans Chakra, remplace si besoin
    { name: "Chai", colorScheme: "rose" },   // idem, personnalisable
    { name: "VS Code", colorScheme: "blue" },
    { name: "Nginx", colorScheme: "gray" },
    { name: "DigitalOcean", colorScheme: "cyan" },
    { name: "Jira", colorScheme: "blue" },
    { name: "Git", colorScheme: "orange" },
  ];


  return (
    <>
      <Container maxW={"3xl"} id="about">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                01
              </Text>
              <Text  fontWeight={800}>{t('about')}</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Text color={"gray.600"} fontSize={"xl"} px={4}>
            {profile.about}
          </Text>
          <Text color={"gray.600"} fontSize={"xl"} px={4}>
            {t('techground')}
          </Text>
          <Wrap spacing={3}>
            {badges.map((badge) => (
              <WrapItem key={badge.name}>
                <Badge fontSize="md" colorScheme={badge.colorScheme}>{badge.name}</Badge>
              </WrapItem>
            ))}
          </Wrap>
        </Stack>
      </Container>
    </>
  );
}

