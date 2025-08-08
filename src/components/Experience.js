import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Badge,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
  ButtonGroup,
  Center,
  Wrap,
  WrapItem,
  SimpleGrid
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Fade } from "react-reveal";
import { useState, useEffect } from "react";
import ExperienceArray from "./ExperienceArray";
import TagsArray from "./TagsArray";
import { useTranslation } from "react-i18next";

export default function Experience({ color }) {
  const experience = ExperienceArray();
  const options = TagsArray("ExperienceTags");
  const [selected, setSelected] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    if (options.length > 0) {
      setSelected(options[0].value);
    }
  }, [options]);

  const handleSelected = (value) => {
    setSelected(value);
  };

  return (
    <Container maxW={{ base: "full", md: "5xl" }} px={{ base: 4, md: 0 }} id="experience">
      <Stack
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 10, md: 20 }}
      >
        {/* Section Title */}
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4} flexWrap="wrap">
            <Text color={`${color}.400`} fontWeight={800}>
              02
            </Text>
            <Text fontWeight={800}>{t("experience")}</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>

        {/* Boutons responsifs */}
        <Center px={4}>
          <Wrap justify="center" spacing={2}>
            {options.map((option) => (
              <WrapItem key={option.value}>
                <Button
                  size={{ base: "sm", md: "md" }}
                  colorScheme={selected === option.value ? `${color}` : "gray"}
                  onClick={() => handleSelected(option.value)}
                >
                  {option.value}
                </Button>
              </WrapItem>
            ))}
          </Wrap>
        </Center>

        {/* Cartes responsives */}
        <Stack px={4} spacing={4}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {experience
              .filter((exp) => selected?.includes(exp.tags))
              .map((exp) => (
                <Fade bottom key={exp.company}>
                  <Card size="sm" h="100%">
                    <CardHeader>
                      <Flex
                        justifyContent="space-between"
                        flexDirection={{ base: "column", sm: "row" }}
                        alignItems={{ base: "flex-start", sm: "center" }}
                      >
                        <HStack align="start" spacing={3}>
                          <Image
                            src={exp.image}
                            h={{ base: 40, sm: 50 }}
                            objectFit="contain"
                          />
                          <Box align="left">
                            <Text fontWeight={600} fontSize={{ base: "md", md: "lg" }}>
                              {exp.company}
                            </Text>
                            <Text fontSize={{ base: "sm", md: "md" }}>{exp.position}</Text>
                          </Box>
                        </HStack>
                        <Text
                          px={2}
                          fontWeight={300}
                          fontSize={{ base: "sm", md: "md" }}
                          mt={{ base: 2, sm: 0 }}
                        >
                          {exp.duration}
                        </Text>
                      </Flex>
                    </CardHeader>

                    <CardBody>
                      <Flex>
                        <List align="left" spacing={3}>
                          {exp.listItems.map((item, index) => (
                            <ListItem key={index}>
                              <ListIcon
                                boxSize={6}
                                as={ChevronRightIcon}
                                color={`${color}.500`}
                              />
                              {item}
                            </ListItem>
                          ))}
                        </List>
                      </Flex>
                    </CardBody>

                    <CardFooter>
                      <HStack spacing={2} flexWrap="wrap">
                        {exp.badges.map((badge) => (
                          <Badge
                            key={badge.name}
                            colorScheme={badge.colorScheme}
                            fontSize={{ base: "xs", md: "sm" }}
                          >
                            {badge.name}
                          </Badge>
                        ))}
                      </HStack>
                    </CardFooter>
                  </Card>
                </Fade>
              ))}
          </SimpleGrid>
        </Stack>
      </Stack>
    </Container>
  );
}
