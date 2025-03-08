"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BrandLogo from "~/components/Element/BrandLogo/BrandLogo";
import {
  Container,
  Grid,
  Popper,
  Grow,
  Icon,
  Typography,
  Box,
  Collapse,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Computer,
  School,
  Code,
  Business,
  ContactMail,
  KeyboardArrowDown,
  KeyboardArrowRight,
} from "@mui/icons-material";

const Header = () => {
  const [sideBar, setSideBar] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [dropdownEl, setDropdownEl] = useState(null);
  const [dropdownName, setDropdownName] = useState("");
  const [nestedDropdown, setNestedDropdown] = useState(null);
  const [nestedDropdownEl, setNestedDropdownEl] = useState(null);
  const [nestedDropdownName, setNestedDropdownName] = useState("");
  const [scrollClassName, setScrollClassName] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Array of hero images for the carousel
  const heroImages = [
    "/images/hero/hero_laptop_1.jpg",
    "/images/hero/hero_iphone_1.jpg",
    "/images/hero/hero_headphone_1.jpg",
  ];

  // Auto-scroll logic for hero images
  useEffect(() => {
    if (sideBar) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
    }
  }, [sideBar]);

  // Responsive padding based on screen size
  const headerPadding = isSmallMobile
    ? "8px 8px" // Reduced padding for mobile phones
    : isMobile
    ? "20px 20px" // Medium padding for tablets
    : "30px 30px"; // Original padding for desktops

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollClassName("sticky-menu");
      } else {
        setScrollClassName("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const routes = [
    {
      name: "Solutions",
      icon: <Computer />,
      columns: 2,
      rowsPerColumn: 5,
      collapse: [
        {
          name: "AI & Blockchain",
          collapse: [
            { name: "AI Services", route: "/service/ai" },
            { name: "Blockchain Development", route: "/service/blockchain" },
            { name: "Smart Contracts", route: "/service/smart-contracts" },
            { name: "Web3 Integration", route: "/service/web3" },
          ],
        },
        {
          name: "Enterprise Solutions",
          collapse: [
            { name: "AI Analytics Platform", route: "/solutions/ai-analytics" },
            { name: "DeFi Solutions", route: "/solutions/defi" },
            { name: "NFT Marketplace", route: "/solutions/nft" },
            { name: "Data Security Tools", route: "/solutions/security" },
          ],
        },
        {
          name: "Hardware Store",
          collapse: [
            { name: "Mining Equipment", route: "/hardware/mining" },
            { name: "AI Development Kits", route: "/hardware/ai-kits" },
            { name: "Networking Hardware", route: "/hardware/networking" },
            { name: "Accessories", route: "/hardware/accessories" },
          ],
        },
      ],
    },
    {
      name: "Resources",
      icon: <School />,
      columns: 2,
      rowsPerColumn: 4,
      collapse: [
        {
          name: "Online Courses",
          collapse: [
            { name: "Blockchain Fundamentals", route: "/courses/blockchain" },
            {
              name: "Advanced Smart Contracts",
              route: "/courses/smart-contracts",
            },
            { name: "AI & Machine Learning", route: "/courses/ai-ml" },
            { name: "Web3 Development", route: "/courses/web3" },
          ],
        },
        {
          name: "Physical Classes",
          collapse: [
            { name: "Class Schedule", route: "/classes/schedule" },
            { name: "Campus Locations", route: "/classes/locations" },
            { name: "Student Portal", route: "/classes/portal" },
          ],
        },
        {
          name: "Learning Paths",
          collapse: [
            {
              name: "Certification Programs",
              route: "/learning/certification",
            },
            { name: "Blog", route: "/learning/blog" },
            { name: "Whitepapers", route: "/learning/whitepapers" },
            { name: "Documentation", route: "/learning/docs" },
            { name: "API References", route: "/learning/api" },
            { name: "Community Forum", route: "/learning/forum" },
          ],
        },
      ],
    },
    {
      name: "Technology",
      icon: <Code />,
      columns: 2,
      rowsPerColumn: 3,
      collapse: [
        {
          name: "Tech Stack",
          collapse: [
            { name: "Our Tech Stack", route: "/tech/stack" },
            { name: "Innovation Lab", route: "/tech/lab" },
            { name: "Research & Development", route: "/tech/research" },
          ],
        },
        {
          name: "Developer Resources",
          collapse: [
            { name: "Case Studies", route: "/tech/cases" },
            { name: "Documentation", route: "/tech/docs" },
            { name: "Developer Portal", route: "/tech/portal" },
          ],
        },
      ],
    },
    {
      name: "About Us",
      icon: <Business />,
      columns: 2,
      rowsPerColumn: 3,
      collapse: [
        {
          name: "Company Info",
          collapse: [
            { name: "Company", route: "/pages/landing-pages/about-us" },
            { name: "Team", route: "/about/team" },
            { name: "Partners", route: "/about/partners" },
          ],
        },
        {
          name: "Opportunities",
          collapse: [
            { name: "Careers", route: "/about/careers" },
            { name: "Press Room", route: "/about/press" },
            { name: "Find Our Campuses", route: "/about/campuses" },
          ],
        },
      ],
    },
    {
      name: "Contact",
      icon: <ContactMail />,
      columns: 2,
      rowsPerColumn: 2,
      collapse: [
        {
          name: "Get In Touch",
          collapse: [
            { name: "Get in Touch", route: "/pages/landing-pages/contact-us" },
            { name: "Request Demo", route: "/contact/demo" },
          ],
        },
        {
          name: "Support",
          collapse: [
            { name: "Technical Support", route: "/contact/support" },
            { name: "Student Support", route: "/contact/student-support" },
          ],
        },
      ],
    },
  ];

  const renderNavbarItems = routes.map(
    ({ name, icon, href, route, collapse }) => (
      <Box
        key={name}
        mx={1}
        p={1}
        display="flex"
        alignItems="center"
        sx={{ cursor: "pointer", userSelect: "none" }}
        onClick={() => {
          if (isMobile && collapse) {
            setDropdown((prev) => (prev === name ? null : name));
            setDropdownEl(null);
            setDropdownName(name);
          }
        }}
        onMouseEnter={({ currentTarget }) => {
          if (collapse && !isMobile) {
            setDropdown(name);
            setDropdownEl(currentTarget);
            setDropdownName(name);
          }
        }}
        onMouseLeave={() => collapse && !isMobile && setDropdown(null)}
      >
        <Typography
          variant="body2"
          lineHeight={1}
          sx={{ alignSelf: "center", display: "flex", alignItems: "center" }}
        >
          {icon}
        </Typography>
        <Typography
          variant="button"
          fontWeight="regular"
          textTransform="capitalize"
          sx={{
            fontWeight: "100%",
            ml: 1,
            mr: 0.25,
            display: "flex",
            alignItems: "center",
          }}
        >
          {name}
        </Typography>
        {collapse && (
          <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
            <KeyboardArrowDown fontSize="small" />
          </Box>
        )}
      </Box>
    )
  );

  const renderRoutes = routes.map(({ name, collapse, columns }) => {
    let template;

    if (collapse && name === dropdownName) {
      if (columns) {
        const groupedCollapse = collapse.reduce((resultArray, item, index) => {
          const rowIndex = Math.floor(index / columns);
          if (!resultArray[rowIndex]) {
            resultArray[rowIndex] = [];
          }
          resultArray[rowIndex].push(item);
          return resultArray;
        }, []);

        template = (
          <Grid key={name} container spacing={2} py={1} px={1.5}>
            {groupedCollapse.map((row, rowIndex) => (
              <Grid key={`row-${rowIndex}`} container item spacing={2}>
                {row.map((col, colIndex) => (
                  <Grid key={`${col.name}-${colIndex}`} item xs={12 / columns}>
                    <Box
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        borderRadius: "8px",
                        p: 2,
                      }}
                    >
                      <Typography
                        display="block"
                        variant="button"
                        fontWeight="bold"
                        textTransform="capitalize"
                        py={1}
                        px={0.5}
                      >
                        {col.name}
                      </Typography>
                      <Box>
                        {col.collapse.map((item) => (
                          <Typography
                            key={item.name}
                            component={Link}
                            href={item.route}
                            display="block"
                            variant="button"
                            color="text"
                            textTransform="capitalize"
                            fontWeight="regular"
                            py={0.625}
                            px={2}
                            sx={{
                              borderRadius: "8px",
                              cursor: "pointer",
                              transition: "all 300ms linear",
                              "&:hover": {
                                backgroundColor: "grey.200",
                                color: "dark.main",
                              },
                            }}
                          >
                            {item.name}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
        );
      } else {
        template = collapse.map((item) => (
          <Typography
            key={item.name}
            component={Link}
            href={item.route}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            variant="button"
            textTransform="capitalize"
            minWidth={item.description ? "14rem" : "12rem"}
            color={item.description ? "dark" : "text"}
            fontWeight={item.description ? "bold" : "regular"}
            py={item.description ? 1 : 0.625}
            px={2}
            sx={{
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 300ms linear",
              "&:hover": {
                backgroundColor: "grey.200",
                color: "dark.main",
                "& *": {
                  color: "dark.main",
                },
              },
            }}
            onClick={(e) => {
              if (isMobile && item.collapse) {
                e.stopPropagation();
                setNestedDropdown(item.name);
                setNestedDropdownEl(null);
                setNestedDropdownName(item.name);
              }
            }}
            onMouseEnter={({ currentTarget }) => {
              if (item.collapse && !isMobile) {
                setNestedDropdown(item.name);
                setNestedDropdownEl(currentTarget);
                setNestedDropdownName(item.name);
              }
            }}
            onMouseLeave={() => {
              if (item.collapse && !isMobile) {
                setNestedDropdown(null);
              }
            }}
          >
            {item.description ? (
              <Box>
                {item.name}
                <Typography
                  display="block"
                  variant="button"
                  color="text"
                  fontWeight="regular"
                  sx={{ transition: "all 300ms linear" }}
                >
                  {item.description}
                </Typography>
              </Box>
            ) : (
              item.name
            )}
            {item.collapse && (
              <Icon
                fontSize="small"
                sx={{ fontWeight: "normal", verticalAlign: "middle", mr: -0.5 }}
              >
                <KeyboardArrowRight fontSize="small" />
              </Icon>
            )}
          </Typography>
        ));
      }
    }

    return template;
  });

  const dropdownMenu = (
    <Popper
      anchorEl={dropdownEl}
      open={Boolean(dropdown)}
      placement="bottom-start"
      transition
      style={{ zIndex: 1300 }}
      onMouseEnter={() => setDropdown(dropdownName)}
      onMouseLeave={() => {
        if (!nestedDropdown) {
          setDropdown(null);
          setDropdownName("");
        }
      }}
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps} style={{ transformOrigin: "left top" }}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              p: 2,
              mt: 1,
              width: isMobile ? "100%" : "auto",
              maxWidth: isMobile ? "none" : "800px",
            }}
          >
            {renderRoutes}
          </Box>
        </Grow>
      )}
    </Popper>
  );

  const renderMobileMenu = () => {
    if (!isMobile) return null;

    return (
      <Box sx={mobileMenuStyles}>
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #eee",
          }}
        >
          <Typography variant="h6">Menu</Typography>
          <Icon onClick={() => setIsActive(false)} sx={{ cursor: "pointer" }}>
            ✕
          </Icon>
        </Box>
        <Box sx={{ p: 2 }}>
          {routes.map((route) => (
            <Box key={route.name} sx={{ mb: 2 }}>
              <Box
                onClick={() =>
                  setDropdownName(dropdownName === route.name ? "" : route.name)
                }
                sx={{
                  p: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  borderBottom: "1px solid #eee",
                }}
              >
                <Box display="flex" alignItems="center">
                  {route.icon}
                  <Typography variant="button" sx={{ ml: 1 }}>
                    {route.name}
                  </Typography>
                </Box>
                {route.collapse && <KeyboardArrowDown fontSize="small" />}
              </Box>

              {dropdownName === route.name && route.collapse && (
                <Collapse in={true}>
                  <Box sx={{ pl: 2 }}>
                    {route.collapse.map((item) => (
                      <Box key={item.name} sx={{ mt: 2 }}>
                        <Typography variant="button" fontWeight="bold">
                          {item.name}
                        </Typography>
                        <Box sx={{ pl: 1, mt: 1 }}>
                          {item.collapse.map((subItem) => (
                            <Typography
                              key={subItem.name}
                              component={Link}
                              href={subItem.route}
                              display="block"
                              variant="button"
                              sx={{ py: 1 }}
                            >
                              {subItem.name}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Collapse>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    );
  };

  const renderNestedRoutes = routes.map(({ collapse, columns }) =>
    collapse && !columns
      ? collapse.map(({ name: parentName, collapse: nestedCollapse }) => {
          let template;

          if (parentName === nestedDropdownName) {
            template =
              nestedCollapse &&
              nestedCollapse.map((item) => (
                <Typography
                  key={item.name}
                  component={Link}
                  href={item.route}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  variant="button"
                  textTransform="capitalize"
                  minWidth={item.description ? "14rem" : "12rem"}
                  color={item.description ? "dark" : "text"}
                  fontWeight={item.description ? "bold" : "regular"}
                  py={item.description ? 1 : 0.625}
                  px={2}
                  sx={{
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 300ms linear",
                    "&:hover": {
                      backgroundColor: "grey.200",
                      color: "dark.main",
                      "& *": {
                        color: "dark.main",
                      },
                    },
                  }}
                >
                  {item.description ? (
                    <Box>
                      {item.name}
                      <Typography
                        display="block"
                        variant="button"
                        color="text"
                        fontWeight="regular"
                        sx={{ transition: "all 300ms linear" }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  ) : (
                    item.name
                  )}
                  {item.collapse && (
                    <Icon
                      fontSize="small"
                      sx={{
                        fontWeight: "normal",
                        verticalAlign: "middle",
                        mr: -0.5,
                      }}
                    >
                      <KeyboardArrowRight fontSize="small" />
                    </Icon>
                  )}
                </Typography>
              ));
          }

          return template;
        })
      : null
  );

  const nestedDropdownMenu = (
    <Popper
      anchorEl={nestedDropdownEl}
      open={Boolean(nestedDropdown)}
      placement="right-start"
      transition
      style={{ zIndex: 1300 }}
      onMouseEnter={() => {
        setNestedDropdown(nestedDropdownName);
      }}
      onMouseLeave={() => {
        setNestedDropdown(null);
        setNestedDropdownName("");
        setDropdown(null);
      }}
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps} style={{ transformOrigin: "left top" }}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              p: 2,
              ml: 2.5,
              mt: -2.5,
            }}
          >
            {renderNestedRoutes}
          </Box>
        </Grow>
      )}
    </Popper>
  );

  return (
    <header
      className={`site-header tekup-header-section site-header--menu-right header-seven ${scrollClassName}`}
    >
      <div className="tekup-header-top bg-accent">
        <div className="container-fuild">
          <div className="tekup-header-info-wrap">
            <div className="tekup-header-info">
              <ul>
                <li>
                  <i className="ri-map-pin-2-fill"></i> Head Office: Waterloo Rd,
                  Wolverhampton, UK
                </li>
              </ul>
            </div>
            <div className="tekup-header-info">
              <ul>
                <li>
                  <Link href="tel:+234 7017006937">
                    <i className="ri-phone-fill"></i>+234 7017006937, +44 7482187549
                  </Link>
                </li>
                <li>
                  <Link href="mailto:hrklontek@gmail.com">
                    <i className="ri-mail-fill"></i>hrklontek@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fuild">
        <div className="tekup-header-bottom bg-white header-seven">
          <nav className="navbar site-navbar" style={{ padding: headerPadding }}>
            <div className="brand-logo">
              <Link href="/">
                <BrandLogo logoImage="/images/logo/klontek-logo.svg" />
              </Link>
            </div>
            <div className="menu-block-wrapper">
              <div className="menu-overlay"></div>
              <nav
                className={`menu-block ${isActive ? "active" : ""}`}
                id="append-menu-header"
              >
                <div className="mobile-menu-head">
                  <div className="go-back" onClick={() => setDropdown(null)}>
                    <i className="fa fa-angle-left"></i>
                  </div>
                  <div className="current-menu-title"></div>
                  <div
                    className="mobile-menu-close"
                    onClick={() => setIsActive(false)}
                  >
                    &times;
                  </div>
                </div>
                <ul className="site-menu-main">{renderNavbarItems}</ul>
              </nav>
            </div>
            <div className="header-btn header-btn-l1 ms-auto">
              <div className="tekup-header-icon">
                <div
                  className="tekup-header-search"
                  onClick={() => setSearchBar(true)}
                >
                  <i className="ri-search-line"></i>
                </div>
                <div
                  className="tekup-header-barger dark"
                  onClick={() => setSideBar(!sideBar)}
                >
                  <span></span>
                </div>
              </div>
            </div>
            <div
              className="mobile-menu-trigger"
              onClick={() => setIsActive(!isActive)}
            >
              <span></span>
            </div>
          </nav>
        </div>
      </div>
      {dropdownMenu}
      {nestedDropdownMenu}
      {renderMobileMenu()}
      <div className="tekup-sidemenu-wraper">
        <div className={`tekup-sidemenu-column ${sideBar ? "active" : ""}`}>
          <div className="tekup-sidemenu-body">
            <div className="tekup-sidemenu-logo">
              <Link href="/">
                <img src="/images/logo/klontek-logo.svg" alt="Company Logo" />
              </Link>
            </div>
            {/* Updated Description */}
            <p>
              At Klontek, we specialize in cutting-edge AI, blockchain, and
              enterprise solutions. Our mission is to empower businesses with
              innovative technologies that drive growth and efficiency. Explore our
              services and resources to transform your digital future.
              <br />
              <br />
              We also run the <strong>Klontek Academy</strong>, where we teach AI,
              blockchain, Web3, and software development (web and mobile) to
              aspiring developers and professionals.
            </p>

      {/* Store Section */}
      <Box sx={{ mt: 3, mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Explore Our Store
          </Typography>
          <Link href="/store">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateX(5px)",
                },
              }}
            >
              <Typography variant="body1" sx={{ mr: 1 }}>
                Visit Store
              </Typography>
              <Icon sx={{ fontSize: "1.5rem" }}>→</Icon>
            </Box>
          </Link>
        </Box>

        {/* Auto-Scrolling Product Images */}
        <div className="tekup-sidemenu-thumb">
          <img
            src={heroImages[currentImageIndex]}
            alt={`Product Image ${currentImageIndex + 1}`}
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </div>
      </Box>


            {/* Updated Address and Contact Section */}
            <div className="tekup-contact-info-wrap">
              <div className="tekup-contact-info">
                <i className="ri-map-pin-2-fill"></i>
                <h5>Address</h5>
                <p>
                  Head Office: Waterloo Rd, Wolverhampton, UK
                  <br />
                  Regional Office: Lagos, Nigeria
                </p>
              </div>
              <div className="tekup-contact-info">
                <i className="ri-mail-fill"></i>
                <h5>Contact</h5>
                <Link href="mailto:hrklontek@gmail.com">hrklontek@gmail.com</Link>
                <Link href="tel:+2347017006937">+234 701 700 6937</Link>
                <Link href="tel:+447482187549">+44 748 218 7549</Link>
              </div>
            </div>
            {/* Social Icons (Unchanged) */}
            <div className="tekup-social-icon-box">
              <ul>
                <li>
                  <Link href="https://www.facebook.com/">
                    <i className="ri-facebook-fill"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/">
                    <i className="ri-linkedin-fill"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/">
                    <i className="ri-twitter-fill"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/">
                    <i className="ri-instagram-fill"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <span
            className="tekup-sidemenu-close"
            onClick={() => setSideBar(false)}
          >
            <i className="ri-close-line"></i>
          </span>
        </div>
        <div className="offcanvas-overlay"></div>
      </div>
      <div
        className={`offcanvas-overlay ${sideBar ? "active" : ""}`}
        onClick={() => setSideBar(false)}
      ></div>
      <div className={`tekup-header-search-section ${searchBar ? "open" : ""}`}>
        <div className="container">
          <div className="tekup-header-search-box">
            <input type="search" placeholder="Search here..." />
            <button id="header-search" type="button">
              <img src="/images/v1/search-dark.png" alt="" />
            </button>
            <p>Type above and press Enter to search. Press Close to cancel.</p>
          </div>
        </div>
        <div
          className="tekup-header-search-close"
          onClick={() => setSearchBar(false)}
        >
          <i className="ri-close-line"></i>
        </div>
      </div>
      <div
        className={`search-overlay ${searchBar ? "open" : ""}`}
        onClick={() => setSearchBar(false)}
      ></div>
    </header>
  );
};

export default Header;