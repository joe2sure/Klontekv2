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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Define responsive padding based on screen size
  const headerPadding = isSmallMobile 
    ? '8px 8px'  // Reduced padding for mobile phones
    : isMobile 
      ? '20px 20px'  // Medium padding for tablets
      : '30px 30px'; // Original padding for desktops

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
            { name: "AI Services", route: "/services/ai" },
            { name: "Blockchain Development", route: "/services/blockchain" },
            { name: "Smart Contracts", route: "/services/smart-contracts" },
            { name: "Web3 Integration", route: "/services/web3" },
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
      columns: 2, // Changed from 1 to 2
      rowsPerColumn: 3, // Adjusted for better display
      collapse: [
        {
          name: "Tech Stack", // Capitalized for consistency
          collapse: [
            { name: "Our Tech Stack", route: "/tech/stack" },
            { name: "Innovation Lab", route: "/tech/lab" },
            { name: "Research & Development", route: "/tech/research" },
          ],
        },
        {
          name: "Developer Resources", // Added second column
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
      columns: 2, // Changed from 1 to 2
      rowsPerColumn: 3, // Adjusted for better display
      collapse: [
        {
          name: "Company Info", // Changed from 'company' for better description
          collapse: [
            { name: "Company", route: "/pages/landing-pages/about-us" },
            { name: "Team", route: "/about/team" },
            { name: "Partners", route: "/about/partners" },
          ],
        },
        {
          name: "Opportunities", // Added second column
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
      columns: 2, // Changed from 1 to 2
      rowsPerColumn: 2, // Adjusted for better display
      collapse: [
        {
          name: "Get In Touch", // Better name than 'contact'
          collapse: [
            { name: "Get in Touch", route: "/pages/landing-pages/contact-us" },
            { name: "Request Demo", route: "/contact/demo" },
          ],
        },
        {
          name: "Support", // Added second column
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

    // Apply the grid layout to all dropdown menus with columns
    if (collapse && name === dropdownName) {
      // Modified this condition to handle all dropdown menus with columns consistently
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
        // Fallback for the rare case without columns
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

  // Add responsive styles for mobile
  const mobileMenuStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    zIndex: 1200,
    overflowY: "auto",
    transition: "all 0.3s ease",
    transform: isMobile && isActive ? "translateX(0)" : "translateX(-100%)",
  };

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
              width: isMobile ? "100%" : "auto", // Full width on mobile
              maxWidth: isMobile ? "none" : "800px", // Limit width on desktop
            }}
          >
            {renderRoutes}
          </Box>
        </Grow>
      )}
    </Popper>
  );

  // Mobile menu rendering
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
                  <i className="ri-map-pin-2-fill"></i>2774 Oak Drive,
                  Plattsburgh, New York
                </li>
              </ul>
            </div>
            <div className="tekup-header-info">
              <ul>
                <li>
                  <Link href="tel:123">
                    <i className="ri-phone-fill"></i>518-564-3200
                  </Link>
                </li>
                <li>
                  <Link href="mailto:name@email.com">
                    <i className="ri-mail-fill"></i>tachup@example.com
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
                <BrandLogo logoImage="/images/logo/logo-dark.svg" />
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
              <Link href="">
                <img src="/images/v1/logo.svg" alt="" />
              </Link>
            </div>
            <p>
              Vast numbers of employees now work remotely, and it's too late to
              develop a set of remote-work policies if you didn't already have
              one.
            </p>
            <div className="tekup-sidemenu-thumb">
              <img src="/images/hero/hero-bg1.png" alt="" />
            </div>
            <div className="tekup-contact-info-wrap">
              <div className="tekup-contact-info">
                <i className="ri-map-pin-2-fill"></i>
                <h5>Address</h5>
                <p>
                  1791 Yorkshire Circle Kitty
                  <br />
                  Hawk, NC 279499
                </p>
              </div>
              <div className="tekup-contact-info">
                <i className="ri-mail-fill"></i>
                <h5>Contact</h5>
                <Link href="mailto:name@email.com">info@mthemeus.com</Link>
                <Link href="tel:123">518-564-3200</Link>
              </div>
            </div>
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

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import BrandLogo from "~/components/Element/BrandLogo/BrandLogo";

// const Header = () => {
//   const [sideBar, setSideBar] = useState(false);
//   const [searchBar, setSearchBar] = useState(false);
//   const [isActive, setIsActive] = useState(false);
//   const [subMenuArray, setSubMenuArray] = useState([]);
//   const [subMenuTextArray, setSubMenuTextArray] = useState([]);
//   const [scrollClassName, setScrollClassName] = useState("");

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setScrollClassName("sticky-menu");
//       } else {
//         setScrollClassName("");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const menuMainClickHandler = (e) => {
//     if (typeof window !== "undefined" && window.innerWidth <= 991) {
//       document.querySelectorAll(".nav-item").forEach((item) => {
//         item.classList.remove("active");
//       });

//       const hasChildren = e.target.closest(".nav-item-has-children");
//       if (hasChildren) {
//         e.preventDefault();
//         if (hasChildren.classList.contains("nav-item-has-children")) {
//           showSubMenu(hasChildren);
//         }
//       }
//     }
//   };

//   const goBackClickHandler = () => {
//     const lastItem = subMenuArray.slice(-1)[0];
//     const lastItemText = subMenuTextArray.slice(-2)[0];
//     setSubMenuArray(subMenuArray.slice(0, -1));
//     setSubMenuTextArray(subMenuTextArray.slice(0, -1));
//     if (lastItem) {
//       if (subMenuArray.length >= 0) {
//         if (
//           !document
//             .getElementById(lastItem)
//             .classList.contains("nav-item-has-children")
//         ) {
//           document.getElementById(lastItem).style.animation =
//             "slideRight 0.5s ease forwards";
//           document.querySelector(".current-menu-title").innerHTML =
//             lastItemText;
//           setTimeout(() => {
//             document.getElementById(lastItem).classList.remove("active");
//           }, 300);
//         } else {
//           document.querySelector(".go-back").classList.remove("active");
//         }
//       }
//     }
//     if (subMenuArray.length === 1) {
//       document.querySelector(".mobile-menu-head").classList.remove("active");
//     }
//   };

//   const menuTriggerClickHandler = () => {
//     toggleMenu();
//   };

//   const closeMenuClickHandler = () => {
//     toggleMenu();
//     const submenuAll = document.querySelectorAll(".sub-menu");
//     submenuAll.forEach((submenu) => {
//       submenu.classList.remove("active");
//       submenu.style.animation = "";
//     });

//     document.querySelector(".go-back").classList.remove("active");
//   };

//   const overlayClickHandler = () => {
//     toggleMenu();
//   };

//   const toggleMenu = () => {
//     setIsActive(!isActive);
//     document.querySelector(".menu-overlay").classList.toggle("active");
//   };

//   const showSubMenu = (hasChildren) => {
//     const submenuAll = document.querySelectorAll(".sub-menu");
//     submenuAll.forEach((submenu) => submenu.classList.remove());
//     const subMenu = hasChildren.querySelector(".sub-menu");
//     setSubMenuArray([...subMenuArray, subMenu.id]);
//     subMenu.classList.add("active");
//     subMenu.style.animation = "slideLeft 0.5s ease forwards";
//     const menuTitle = hasChildren.querySelector(".drop-trigger").textContent;
//     setSubMenuTextArray([...subMenuTextArray, menuTitle]);
//     document.querySelector(".current-menu-title").innerHTML = menuTitle;
//     document.querySelector(".mobile-menu-head").classList.add("active");
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (
//         typeof window !== "undefined" &&
//         window.innerWidth > 991 &&
//         isActive
//       ) {
//         toggleMenu();
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [isActive]);
//   return (
//     <header className={`site-header tekup-header-section site-header--menu-right header-seven ${scrollClassName}`}>
//       {/* <div className="tekup-header-top">
//         <div className="container-fuild">
//           <div className="tekup-header-info-wrap">
//             <div className="tekup-header-info">
//               <ul>
//                 <li><i className="ri-map-pin-2-fill"></i>2774 Oak Drive, Plattsburgh, New York</li>
//               </ul>
//             </div>
//             <div className="tekup-header-info">
//               <ul>
//                 <li><Link href="tel:123"><i className="ri-phone-fill"></i>518-564-3200</Link></li>
//                 <li><Link href="mailto:name@email.com"><i className="ri-mail-fill"></i>tachup@example.com</Link></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div> */}
//         <div className="tekup-header-top bg-accent">
//           <div className="container-fuild">
//             <div className="tekup-header-info-wrap">
//               <div className="tekup-header-info">
//                 <ul>
//                   <li><i className="ri-map-pin-2-fill"></i>2774 Oak Drive, Plattsburgh, New York</li>
//                 </ul>
//               </div>
//               <div className="tekup-header-info">
//                 <ul>
//                   <li><Link href="tel:123"><i className="ri-phone-fill"></i>518-564-3200</Link></li>
//                   <li><Link href="mailto:name@email.com"><i className="ri-mail-fill"></i>tachup@example.com</Link></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       <div className="container-fuild">
//         <div className="tekup-header-bottom bg-white header-seven">
//           <nav className="navbar site-navbar">
//             {/* <!-- Brand Logo--> */}
//             <div className="brand-logo">
//               <Link href="/">
//                 <BrandLogo logoImage="/images/logo/logo-dark.svg" />
//               </Link>
//             </div>
//             <div className="menu-block-wrapper">
//               <div className="menu-overlay"></div>
//               <nav
//                 className={`menu-block ${isActive ? "active" : ""}`}
//                 id="append-menu-header"
//               >
//                 <div className="mobile-menu-head">
//                   <div className="go-back" onClick={goBackClickHandler}>
//                     <i className="fa fa-angle-left"></i>
//                   </div>
//                   <div className="current-menu-title"></div>
//                   <div
//                     className="mobile-menu-close"
//                     onClick={closeMenuClickHandler}
//                   >
//                     {" "}
//                     &times;
//                   </div>
//                 </div>
//                 <ul className="site-menu-main" onClick={menuMainClickHandler}>
//                   <li className="nav-item nav-item-has-children">
//                     <Link href="#" className="nav-link-item drop-trigger">Demo <i className="ri-arrow-down-s-line"></i></Link>
//                     <ul className="sub-menu" id="submenu-1">
//                       <li className="sub-menu--item">
//                         <Link href="/">
//                           <span className="menu-item-text">Home 01</span>
//                         </Link>
//                       </li>
//                       <li className="sub-menu--item">
//                         <Link href="home-2">
//                           <span className="menu-item-text">home 02</span>
//                         </Link>
//                       </li>
//                       <li className="sub-menu--item">
//                         <Link href="home-3">
//                           <span className="menu-item-text">home 03</span>
//                         </Link>
//                       </li>
//                       <li className="sub-menu--item">
//                         <Link href="home-4">
//                           <span className="menu-item-text">home 04</span>
//                         </Link>
//                       </li>
//                       <li className="sub-menu--item">
//                         <Link href="home-5">
//                           <span className="menu-item-text">home 05</span>
//                         </Link>
//                       </li>
//                       <li className="sub-menu--item">
//                         <Link href="home-6">
//                           <span className="menu-item-text">home 06</span>
//                         </Link>
//                       </li>
//                       <li className="sub-menu--item">
//                         <Link href="home-7">
//                           <span className="menu-item-text">home 07</span>
//                         </Link>
//                       </li>
//                       <li className="sub-menu--item">
//                         <Link href="home-8">
//                           <span className="menu-item-text">home 08</span>
//                         </Link>
//                       </li>
//                       <li className="sub-menu--item">
//                         <Link href="home-9">
//                           <span className="menu-item-text">home 09</span>
//                         </Link>
//                       </li>
//                       <li className="sub-menu--item">
//                         <Link href="home-10">
//                           <span className="menu-item-text">home 10</span>
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="nav-item">
//                     <Link href="about-us" className="nav-link-item">About Us</Link>
//                   </li>
//                   <li className="nav-item nav-item-has-children">
//                     <Link href="#" className="nav-link-item drop-trigger">Pages <i className="ri-arrow-down-s-line"></i></Link>
//                     <ul className="sub-menu" id="submenu-2">
//                       <li className="sub-menu--item">
//                         <Link href="about-us">
//                           <span className="menu-item-text">About Us</span>
//                         </Link>
//                       </li>
//                       <li className="sub-menu--item">
//                         <Link href="pricing">
//                           <span className="menu-item-text">Pricing</span>
//                         </Link>
//                       </li>
//                       <li className="sub-menu--item nav-item-has-children">
//                         <Link href="#" data-menu-get="h3" className="drop-trigger">blog <i className="ri-arrow-down-s-line"></i></Link>
//                         <ul className="sub-menu shape-none" id="submenu-3">
//                           <li className="sub-menu--item">
//                             <Link href="blog">
//                               <span className="menu-item-text">Blog</span>
//                             </Link>
//                           </li>
//                           <li className="sub-menu--item">
//                             <Link href="blog-grid">
//                               <span className="menu-item-text">Blog grid</span>
//                             </Link>
//                           </li>
//                           <li className="sub-menu--item">
//                             <Link href="single-blog">
//                               <span className="menu-item-text">blog details</span>
//                             </Link>
//                           </li>
//                         </ul>
//                       </li>
//                       <li className="sub-menu--item nav-item-has-children">
//                         <Link href="#" data-menu-get="h3" className="drop-trigger">Service<i className="ri-arrow-down-s-line"></i>
//                         </Link>
//                         <ul className="sub-menu shape-none" id="submenu-4">
//                           <li className="sub-menu--item">
//                             <Link href="service">
//                               <span className="menu-item-text">service</span>
//                             </Link>
//                           </li>
//                           <li className="sub-menu--item">
//                             <Link href="single-service">
//                               <span className="menu-item-text">service details</span>
//                             </Link>
//                           </li>
//                         </ul>
//                       </li>
//                       <li className="sub-menu--item nav-item-has-children">
//                         <Link href="#" data-menu-get="h3" className="drop-trigger">Team<i className="ri-arrow-down-s-line"></i>
//                         </Link>
//                         <ul className="sub-menu shape-none" id="submenu-5">
//                           <li className="sub-menu--item">
//                             <Link href="team">
//                               <span className="menu-item-text">team</span>
//                             </Link>
//                           </li>
//                           <li className="sub-menu--item">
//                             <Link href="single-team">
//                               <span className="menu-item-text">team details</span>
//                             </Link>
//                           </li>
//                         </ul>
//                       </li>
//                       <li className="sub-menu--item nav-item-has-children">
//                         <Link href="#" data-menu-get="h3" className="drop-trigger">Portfolio<i className="ri-arrow-down-s-line"></i>
//                         </Link>
//                         <ul className="sub-menu shape-none" id="submenu-6">
//                           <li className="sub-menu--item">
//                             <Link href="portfolio-01">
//                               <span className="menu-item-text">Portfolio Grid</span>
//                             </Link>
//                           </li>
//                           <li className="sub-menu--item">
//                             <Link href="portfolio">
//                               <span className="menu-item-text">Portfolio masonry</span>
//                             </Link>
//                           </li>
//                           <li className="sub-menu--item">
//                             <Link href="single-portfolio">
//                               <span className="menu-item-text">Single Portfolio</span>
//                             </Link>
//                           </li>
//                         </ul>
//                       </li>
//                       <li className="sub-menu--item nav-item-has-children">
//                         <Link href="#" data-menu-get="h3" className="drop-trigger">Utility<i className="ri-arrow-down-s-line"></i>
//                         </Link>
//                         <ul className="sub-menu shape-none" id="submenu-7">
//                           <li className="sub-menu--item">
//                             <Link href="faq">
//                               <span className="menu-item-text">faq</span>
//                             </Link>
//                           </li>
//                           <li className="sub-menu--item">
//                             <Link href="errors-404">
//                               <span className="menu-item-text">Error 404</span>
//                             </Link>
//                           </li>
//                           <li className="sub-menu--item">
//                             <Link href="testimonial">
//                               <span className="menu-item-text">testimonial</span>
//                             </Link>
//                           </li>
//                         </ul>
//                       </li>
//                       <li className="sub-menu--item nav-item-has-children">
//                         <Link href="#" data-menu-get="h3" className="drop-trigger">Shop<i className="ri-arrow-down-s-line"></i>
//                         </Link>
//                         <ul className="sub-menu shape-none" id="submenu-8">
//                           <li className="sub-menu--item">
//                             <Link href="shop">
//                               <span className="menu-item-text">shop</span>
//                             </Link>
//                           </li>
//                           <li className="sub-menu--item">
//                             <Link href="single-shop">
//                               <span className="menu-item-text">Shop Details</span>
//                             </Link>
//                           </li>
//                           <li className="sub-menu--item">
//                             <Link href="my-cart">
//                               <span className="menu-item-text">My Cart</span>
//                             </Link>
//                           </li>
//                           <li className="sub-menu--item">
//                             <Link href="checkout">
//                               <span className="menu-item-text">Checkout</span>
//                             </Link>
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="nav-item nav-item-has-children">
//                     <Link href="#" className="nav-link-item drop-trigger">Blog <i className="ri-arrow-down-s-line"></i></Link>
//                     <ul className="sub-menu" id="submenu-9">
//                       <li className="sub-menu--item">
//                         <Link href="blog">
//                           <span className="menu-item-text">blog</span>
//                         </Link>
//                       </li>
//                       <li className="sub-menu--item">
//                         <Link href="blog-grid">
//                           <span className="menu-item-text">Blog grid</span>
//                         </Link>
//                       </li>
//                       <li className="sub-menu--item">
//                         <Link href="single-blog">
//                           <span className="menu-item-text">blog Details</span>
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="nav-item">
//                     <Link href="contact-us" className="nav-link-item">Contact Us</Link>
//                   </li>
//                 </ul>
//               </nav>
//             </div>

//             <div className="header-btn header-btn-l1 ms-auto">
//               <div className="tekup-header-icon">
//                 <div className="tekup-header-search " onClick={() => setSearchBar(true)}>
//                   <i className="ri-search-line"></i>
//                 </div>
//                 <div className="tekup-header-barger dark" onClick={() => setSideBar(!sideBar)}>
//                   <span></span>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- mobile menu trigger --> */}
//             <div className="mobile-menu-trigger" onClick={menuTriggerClickHandler}>
//               <span></span>
//             </div>
//             {/* <!--/.Mobile Menu Hamburger Ends--> */}
//           </nav>
//         </div>
//       </div>
//       <div className="tekup-sidemenu-wraper">
//         <div className={`tekup-sidemenu-column ${sideBar ? "active" : ""}`}>
//           <div className="tekup-sidemenu-body">
//             <div className="tekup-sidemenu-logo">
//               <Link href=""><img src="/images/v1/logo.svg" alt="" /></Link>
//             </div>
//             <p>Vast numbers of employees now work remotely, and it’s too late to develop a set of remote-work policies if you didn’t already have one.</p>
//             <div className="tekup-sidemenu-thumb">
//               <img src="/images/hero/hero-bg1.png" alt="" />
//             </div>
//             <div className="tekup-contact-info-wrap">
//               <div className="tekup-contact-info">
//                 <i className="ri-map-pin-2-fill"></i>
//                 <h5>Address</h5>
//                 <p>1791 Yorkshire Circle Kitty<br />
//                   Hawk, NC 279499</p>
//               </div>
//               <div className="tekup-contact-info">
//                 <i className="ri-mail-fill"></i>
//                 <h5>Contact</h5>
//                 <Link href="mailto:name@email.com">info@mthemeus.com</Link>
//                 <Link href="tel:123">518-564-3200</Link>
//               </div>
//             </div>
//             <div className="tekup-social-icon-box">
//               <ul>
//                 <li>
//                   <Link href="https://www.facebook.com/">
//                     <i className="ri-facebook-fill"></i>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="https://www.linkedin.com/">
//                     <i className="ri-linkedin-fill"></i>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="https://twitter.com/">
//                     <i className="ri-twitter-fill"></i>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="https://www.instagram.com/">
//                     <i className="ri-instagram-fill"></i>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <span className="tekup-sidemenu-close" onClick={() => setSideBar(false)}>
//             <i className="ri-close-line"></i>
//           </span>
//         </div>
//         <div className="offcanvas-overlay"></div>
//       </div>
//       <div className={`offcanvas-overlay ${sideBar ? "active" : ""}`} onClick={() => setSideBar(false)}></div>
//       <div className={`tekup-header-search-section ${searchBar ? "open" : ""}`}>
//         <div className="container">
//           <div className="tekup-header-search-box">
//             <input type="search" placeholder="Search here..." />
//             <button id="header-search" type="button"><img src="/images/v1/search-dark.png" alt="" /></button>
//             <p>Type above and press Enter to search. Press Close to cancel.</p>
//           </div>
//         </div>
//         <div className="tekup-header-search-close" onClick={() => setSearchBar(false)}>
//           <i className="ri-close-line"></i>
//         </div>
//       </div>
//       <div className={`search-overlay ${searchBar ? "open" : ""}`} onClick={() => setSearchBar(false)}></div>
//     </header>
//   );
// };

// export default Header;
