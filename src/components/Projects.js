import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  Card,
  CardBody,
  Heading,
  Badge,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import ProjectsArray from "./ProjectsArray";
import ImageSlider from "./ImageSlider";
import { useTranslation } from "react-i18next";

export default function Projects({ color }) {
  const { t } = useTranslation();
  const projects = ProjectsArray();

  return (
    <Container
      maxW={{ base: "full", md: "5xl" }}
      px={{ base: 4, md: 0 }}
      id="projects"
    >
      <Stack
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 10, md: 20 }}
      >
        {/* Section Title */}
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${color}.400`} fontWeight={800}>
              03
            </Text>
            <Text fontWeight={800}>{t("projects")}</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>

        {/* Projets en grille responsives */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} px={4}>
          {projects.map((project) => (
            <Fade bottom key={project.name}>
              <Card
                direction="column"
                overflow="hidden"
                h="100%"
              >
                <ImageSlider images={project?.images} />

                <CardBody align="left">
                  <Heading
                    size={{ base: "md", md: "lg" }}
                    mb={2}
                  >
                    {project.name}
                  </Heading>

                  <Text fontSize={{ base: "sm", md: "md" }} mb={4}>
                    {project.description}
                  </Text>

                  {/* Boutons responsifs */}
                  <Flex
                    flexWrap="wrap"
                    gap={2}
                    mb={4}
                  >
                    {project.buttons.map((button) => (
                      <a key={button.text} href={button.href}>
                        <Button
                          size={{ base: "sm", md: "md" }}
                          color={`${color}.400`}
                        >
                          {button.text}
                        </Button>
                      </a>
                    ))}
                  </Flex>

                  {/* Badges responsifs */}
                  <Flex flexWrap="wrap" gap={2}>
                    {project.badges.map((badge) => (
                      <Badge
                        key={badge.text}
                        colorScheme={badge.colorScheme}
                        fontSize={{ base: "xs", md: "sm" }}
                      >
                        {badge.text}
                      </Badge>
                    ))}
                  </Flex>
                </CardBody>
              </Card>
            </Fade>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
