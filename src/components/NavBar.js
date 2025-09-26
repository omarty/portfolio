import {
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  useMediaQuery,
  useDisclosure,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import ProfileArray from "./ProfileArray";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
const TbIcons = require("react-icons/tb");

export default function Nav({ color }) {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language
  const profile = ProfileArray();
  const colors = {
    "blue": "#3182CE",
    "cyan": "#00B5D8",
    "gray": "#718096",
    "green": "#38A169",
    "orange": "#DD6B20",
    "pink": "#D53F8C",
    "purple": "#805AD5",
    "red": "#E53E3E",
    "teal": "#319795",
    "yellow": "#D69E2E"
  };
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
  const scrollToHero = () => {
    const heroSection = document.querySelector("#hero");
    heroSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToExperience = () => {
    const experienceSection = document.querySelector("#experience");
    experienceSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };
  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener("scroll", changeScroll);

  const TbLetterComponents = [];

  for (let i = 0; i < profile.logo.length; i++) {
    const letter = profile.logo[i];
    const component = TbIcons[`TbLetter${letter}`];
    TbLetterComponents.push(component);
  }

  const handleDownload = (lang) => {
    const fileUrl = lang === "fr" ? "/cv_fr.pdf" : "/cv_en.pdf";
    window.open(fileUrl, "_blank"); // "_blank" ouvre dans un nouvel onglet
  };



  return (
    <>
      <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        h={16}
        boxShadow={scroll ? "base" : "none"}
        zIndex="sticky"
        position="fixed"
        as="header"
        alignItems={"center"}
        justifyContent={"space-between"}
        w="100%"
      >
        <Link onClick={scrollToHero}>
          <HStack>
            {TbLetterComponents.map((Component, index) => (
              <Component key={index} color={colors[color]} />
            ))}
          </HStack>
        </Link>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            {isLargerThanMD ? (
              <>
                <Button variant="ghost" onClick={scrollToAbout}>
                  {t('about')}
                </Button>
                <Button variant="ghost" onClick={scrollToExperience}>
                  {t('experience')}
                </Button>
                <Button variant="ghost" onClick={scrollToProjects}>
                  {t('projects')}
                </Button>
                <Button variant="ghost" onClick={scrollToContact}>
                  Contact
                </Button>
                <Menu>
                  <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
                    {t('downloadCv.title')}
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => handleDownload("fr")}> {t('downloadCv.french')}</MenuItem>
                    <MenuItem onClick={() => handleDownload("en")}> {t('downloadCv.english')}</MenuItem>
                  </MenuList>
                </Menu>
              </>
            ) : (
              <></>
            )}
            <Menu>
              <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
                {currentLang === 'fr' ? <img src="/french_flag.svg" alt="french_flag" width="24" /> : <img src="/uk_flag.svg" alt="uk_flag" width="20" bg="white" style={{ marginRight: 8 }} />}
              </MenuButton>
              <MenuList bg="white"
                color="black"
              >
                <MenuItem onClick={() => changeLanguage("fr")}>
                  <img src="/french_flag.svg" alt="french_flag" width="20" style={{ marginRight: 8 }} />
                  Français
                </MenuItem>
                <MenuItem onClick={() => changeLanguage("en")}>
                  <img src="/uk_flag.svg" alt="uk_flag" width="20" bg="white" style={{ marginRight: 8 }} />
                  English
                </MenuItem>
              </MenuList>
            </Menu>

            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            {isLargerThanMD ? (
              <></>
            ) : (
              <>
                <Button
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  onClick={onOpen}
                ></Button>
                <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerBody>
                      <Button variant="ghost" onClick={scrollToAbout}>
                        {t('about')}
                      </Button>
                      <Button variant="ghost" onClick={scrollToExperience}>
                        {t('experience')}
                      </Button>
                      <Button variant="ghost" onClick={scrollToProjects}>
                        {t('projects')}
                      </Button>
                      <Button variant="ghost" onClick={scrollToContact}>
                        Contact
                      </Button>
                      <Menu>
                        <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
                          {t('downloadCv.title')}
                        </MenuButton>
                        <MenuList>
                          <MenuItem onClick={() => handleDownload("fr")}> {t('downloadCv.french')}</MenuItem>
                          <MenuItem onClick={() => handleDownload("en")}> {t('downloadCv.english')}</MenuItem>
                        </MenuList>
                      </Menu>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
