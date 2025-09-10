import React, { useMemo, useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Link, Container, Grid, Paper, Avatar, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { styled } from '@mui/material/styles';
import logo from './assets/logo.jpeg';
import client1 from './assets/jabal1.png';
import client11 from './assets/jabal2.png';
import client2 from './assets/lebtar1.png';
import client21 from './assets/lebtar2.png';
import client22 from './assets/lebtar3.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import client3 from './assets/bob1.png';
import client4 from './assets/rent1.png';
import client41 from './assets/rent2.png';

import { motion } from 'framer-motion'
import StarIcon from '@mui/icons-material/Star';

interface TitleWithDividerProps {
  children: React.ReactNode;
}
const AnimatedSection: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: false, amount: 0.2 }} // triggers each time section enters viewport
    >
      {children}
    </motion.div>
  );
};
const TitleWithDivider: React.FC<TitleWithDividerProps> = ({ children }) => {
  return (
    <Box textAlign="center" mb={4} paddingBottom={'2rem'}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          display: 'inline-block',
          position: 'relative',
          background: 'linear-gradient(45deg, #00c6ff, #0072ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: {
            xs: '1.5rem', 
            sm: '2rem', 
            md: '2rem',   
          },
        }}
      >
        {children}
      </Typography>
      {/* Divider */}
      <Box
        sx={{
          height: '4px',
          width: {
            xs: '40%', 
            sm: '60%', 
            md: '60%',  
          },
          maxWidth: 200,
          bgcolor: '#B0B0B0', 
          mx: 'auto',
          mt: 1,
          borderRadius: 2,
        }}
      />
    </Box>
  );
};

const reviews = [
  {
    name: "Mohn Doe",
    avatar: "/avatars/john.jpg", // replace with your images
    rating: 5,
    text: "Excellent service! Highly recommended for anyone looking for quality and professionalism."
  },
  {
    name: "Zane Smith",
    avatar: "/avatars/jane.jpg",
    rating: 4,
    text: "Very satisfied with the experience. The team was helpful and attentive."
  },
  {
    name: "Ali Hassan",
    avatar: "/avatars/ali.jpg",
    rating: 5,
    text: "Amazing support and great results! Will definitely use again."
  },
  {
    name: "Hli Hassan",
    avatar: "/avatars/ali.jpg",
    rating: 5,
    text: "The website’s design is absolutely stunning! The UI/UX is intuitive, modern, and a pleasure to navigate."
  }
];

const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
          primary: { main: '#00C6FF' },
          secondary: { main: '#0072FF' },
          background: { default: '#1C1C1C', paper: '#2E2E2E' },
          text: { primary: '#E0E0E0', secondary: '#9E9E9E' },
        }
        : {
          primary: { main: '#0072FF' },
          secondary: { main: '#00C6FF' },
          background: { default: '#f8f9fa', paper: '#ffffff' },
          text: { primary: '#333333', secondary: '#555555' },
        }),
    },
    typography: {
      fontFamily: '"Century Gothic", sans-serif',
    },
  });

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    opacity: 0.15,
    backgroundImage:
      'radial-gradient(ellipse at center, rgba(0, 198, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
  },
}));

const LogoImage = styled('img')({
  width: '100%',
  maxWidth: '100%',
  maxHeight: '80vh',
  height: 'auto',
  flexShrink: 1,
});




interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    images: string[];
    url: string;
  };
}


interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    images: string[];
    url: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    if (project.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <Paper
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        },
        display: "flex",
        flexDirection: "column",
        height: "100%",
        textAlign: "center",
        width: { xs: "90%", sm: 350, md: 500 },
        maxWidth: "100%",
        margin: "0 auto",
      }}
    >
      <Typography
        variant="h6"
        component="h3"
        sx={{ fontWeight: "bold", marginTop: "15px", textAlign: "center" }}
      >
        {project.title}
      </Typography>
      {/* Image wrapper */}
      <Box
        sx={{
          width: "100%",
          height: 220,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "background.paper",
          p: 2,
          position: "relative",
        }}
      >
        {project.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={project.title}
            style={{
              maxWidth: "85%",
              maxHeight: "100%",
              objectFit: "contain",
              marginTop: "10px",
              borderRadius: "20px",
              position: "absolute",
              opacity: idx === currentImageIndex ? 1 : 0,
              transition: "opacity 0.6s ease-in-out",
              boxShadow: "0 8px 20px rgba(0, 114, 255, 0.4)",
            }}
          />
        ))}
      </Box>
      {/* Content */}
      <Box sx={{ p: 2, backgroundColor: "background.paper", flexGrow: 1 }}>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", lineHeight: 1.6, }}
        >
          {project.description}
        </Typography>
      </Box>
    </Paper>
  );
};


const App: React.FC = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as 'light' | 'dark' | null;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleMode = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const services = [
    {
      title: "Data Solutions",
      description: "Empowering businesses with advanced data solutions that transform raw information into actionable insights. Our services include data analysis, visualization, and custom dashboards to optimize decision-making and operational efficiency."
    },
    {
      title: "Web Development",
      description: "Creating modern, responsive, and intuitive websites tailored to your brand. From landing pages to complex e-commerce platforms, we deliver digital experiences that engage users and drive measurable results."
    },
    {
      title: "Clinic Management Systems",
      description: "Designing robust and user-friendly clinic management systems that streamline administrative workflows, patient records, and appointment scheduling. Our solutions enhance efficiency and allow healthcare providers to focus on delivering exceptional patient care."
    },
    // {
    //   title: "QR Digital Menu",
    //   description: "Transform the dining experience with a modern, contactless QR menu solution. Easily update your menu in real-time, provide detailed dish information, and streamline ordering for both staff and customers, enhancing convenience and operational efficiency."
    // },
    {
      title: "QR Digital Menu & Ordering",
      description:
        "Revolutionize the dining experience with a contactless QR menu solution. Customers scan a QR code at their table to access the full menu, view detailed dish information, and place orders directly from their device. Easily update your menu in real-time and streamline operations for both staff and diners, enhancing convenience, speed, and customer satisfaction.",
    },
    {
      title: "SEO & Digital Marketing",
      description: "Boosting your online visibility through strategic SEO and digital marketing solutions. We optimize your website, improve search rankings, and drive targeted traffic to increase engagement, conversions, and brand authority."
    },

  ];


  const projects = [
    {
      title: "Jabal Amel Nursery",
      description: "Developed a modern and intuitive website for Jabal Amel Nursery, a plants and flower nursery. Focused on perfect UI/UX design with a visually appealing layout, making it easy for visitors to explore plants, services, and promotions. Optimized the website for smooth navigation and mobile responsiveness, providing an engaging experience for parents and plant enthusiasts.",
      images: [
        client1,
        client11
      ],
      url: "https://www.jabalamelnursery.com"
    },
    {
      title: "Lebtar",
      description: "Built a comprehensive web platform for Lebtar, a company specializing in ceramic products and toilets. Emphasized SEO best practices to improve search visibility when sharing products online, ensuring better reach to potential customers. Designed a user-friendly interface that showcases their product catalog clearly, boosting user engagement and client conversions.",
      images: [
        client2,
        client21,
        client22
      ],
      url: "https://www.lebtar.com"
    },
    {
      title: "Bob’s Construction",
      description: "Created a professional portfolio website for Bob’s Construction, highlighting past projects with an elegant, clean design. Ensured mobile optimization and fast performance for visitors. Incorporated visual storytelling to make project showcases more engaging and to help attract new clients.",
      images: [
        client3
      ],
      url: "https://bobconstruction.co.uk"
    },
    {
      title: "Rent A Car",
      description: "Developed a responsive website for Rent A Car, focusing on ease of use for clients booking vehicles online. Implemented intuitive navigation, clear calls-to-action, and fast loading times to enhance the user experience. Optimized the website for SEO to improve visibility in local searches and attract more customers.",
      images: [
        client4,
        client41
      ],
      url: "https://www.originalrentacar.com/"
    },
    // {
    //   title: "GO FAST",
    //   description: "Designed a modern, fast-loading website for GO FAST, emphasizing a sleek and dynamic UI/UX. Focused on creating an engaging online presence to showcase their services and attract clients. Ensured the platform is responsive and user-friendly across devices, with attention to performance and aesthetic appeal.",
    //   images: [
    //     client53,
    //     // client51,
    //     // client52,
    //   ],
    //   url: "#"
    // },
  ];


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: 'background.default', color: 'text.primary', minHeight: '100vh' }}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            backgroundColor: mode === 'dark' ? 'rgba(28,28,28,0.7)' : 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(12px)',
            boxShadow: 'none',
            borderBottom: '1px solid rgba(255,255,255,0.05)'
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', background: 'linear-gradient(45deg, #00c6ff, #0072ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Codelta
            </Typography>

            {/* Toggle Button */}
            <Box
              onClick={toggleMode}
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: mode === 'dark' ? 'linear-gradient(135deg, #1C1C1C, #333)' : 'linear-gradient(135deg, #FFD700, #FFB800)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
              }}
            >
              <motion.div
                key={mode}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {mode === 'dark' ? <WbSunnyIcon sx={{ color: '#FFD700', marginTop: "7px" }} /> : <DarkModeIcon sx={{ color: '#1C1C1C', marginTop: "7px" }} />}
              </motion.div>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, '& a': { ml: 3, color: 'text.secondary', textDecoration: 'none', '&:hover': { color: '#00c6ff' } } }}>
              <Link href="#about"> About Us</Link>
              <Link href="#services">Services</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#contact">Contact</Link>
            </Box>
          </Toolbar>
        </AppBar>
        {/* Top Info Bar */}
        <Box
          sx={{
            width: '100%',
            backgroundColor: mode === 'dark' ? '#1C1C1C' : '#f0f0f0',
            color: mode === 'dark' ? '#E0E0E0' : '#333',
            py: 1.5,
            px: { xs: 2, md: 8 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            borderBottom: '1px solid rgba(0, 198, 255, 0.3)',
            mt: '64px', // leave space for AppBar if fixed
            boxShadow: mode === 'dark' ? '0 2px 4px rgba(0,0,0,0.3)' : '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >


          {/* Opening Hours */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 150 }}>
            <img
              src="https://img.icons8.com/ios-filled/24/00c6ff/clock--v1.png"
              alt="clock icon"
            />
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#00c6ff' }}>
                Opening Hours
              </Typography>
              <Typography variant="body2">Mon-Sat: 9AM - 6PM</Typography>
            </Box>
          </Box>

          {/* Call Us */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 150 }}>
            <CallIcon sx={{ color: '#00c6ff', fontSize: 28 }} />
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#00c6ff' }}>
                Call Us
              </Typography>
              <Typography variant="body2">+961 70 059 625</Typography>
            </Box>
          </Box>

          {/* Email Us */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 180 }}>
            <EmailIcon sx={{ color: '#00c6ff', fontSize: 28 }} />
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#00c6ff' }}>
                Email Us
              </Typography>
              <Typography variant="body2">contact@co-delta.com</Typography>
            </Box>
          </Box>
        </Box>

        <main>
          {/* Hero */}
          <HeroSection id="hero">
            <Box sx={{ width: '100%', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
              <LogoImage src={logo} alt="Codelta Logo" />
            </Box>
          </HeroSection>
          <AnimatedSection delay={0.1}>
            <Container id="about" sx={{ py: 12 }}>
              <TitleWithDivider>About Us</TitleWithDivider>
                  <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: "text.secondary" }}>
                      At <strong>Codelta</strong>, we turn ideas into powerful digital solutions. From
                websites and POS systems to data solutions and custom software, we craft technology
                that helps businesses grow and thrive. Our team blends creativity with technical
                expertise to deliver modern, reliable, and user-friendly products for clients worldwide.
                    </Typography>
           
              <Grid
                container
                spacing={6}
                alignItems="center"
                sx={{
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                {/* Text Side */}
                <Grid >
                  <Box sx={{ p: { xs: 0, md: 2 }, marginTop: "2rem" }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        mb: 2,
                        background: "linear-gradient(45deg, #00c6ff, #0072ff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",

                      }}
                    >
                      Why choose us?
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: "text.secondary" }}>
                      What sets us apart is our passion for innovation and attention to detail.
                      We don’t just build software — we create experiences that connect, inspire,
                      and transform. Our approach combines cutting-edge design with robust engineering,
                      ensuring that every solution is both beautiful and functional.
                    </Typography>

                    <Box component="ul" sx={{ listStyle: "none", pl: 0, mb: 3 }}>
                      {[
                        "Creative and modern design tailored to your brand",
                        "User-friendly experiences that inspire and connect",
                        "SEO services to boost visibility and rankings",
                        "Custom solutions — from websites to POS and data systems"
                      ].map((item, idx) => (
                        <Typography
                          component="li"
                          key={idx}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 1.5,
                            color: "text.secondary",
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 22,
                              height: 22,
                              borderRadius: "6px",
                              bgcolor: "primary.main",
                              color: "#fff",
                              fontSize: 14,
                              mr: 1.5,
                            }}
                          >
                            ✓
                          </Box>
                          {item}
                        </Typography>
                      ))}
                    </Box>

                    <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8, color: "text.secondary" }}>
                      At our core, we believe in long-term partnerships. We work closely with
                      our clients, listening to their goals and challenges, and crafting solutions
                      tailored to their unique vision. Together, we aim to push the boundaries
                      of what’s possible in the digital world.
                    </Typography>

                  </Box>
                </Grid>

              </Grid>
            </Container>
          </AnimatedSection>
          {/* Services  */}
          <AnimatedSection>
            <Container id="services" sx={{ position: 'relative', overflow: 'hidden' }}>

              <Box
                sx={{
                  position: 'absolute',
                  top: -50,
                  left: -50,
                  width: 300,
                  height: 300,

                  opacity: 0.08,
                  borderRadius: '50%',
                  filter: 'blur(120px)',
                  zIndex: 0,
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -50,
                  right: -50,
                  width: 400,
                  height: 400,

                  opacity: 0.08,
                  borderRadius: '50%',
                  filter: 'blur(140px)',
                  zIndex: 0,
                }}
              />

              <Box textAlign="center" sx={{ position: 'relative', zIndex: 1 }}>
                <TitleWithDivider> Services</TitleWithDivider>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 12,
                    '@media(max-width:1024px)': { gridTemplateColumns: 'repeat(2, 1fr)', gap: 5 },
                    '@media(max-width:600px)': { gridTemplateColumns: '1fr', gap: 5 },
                  }}
                >
                  {services.map((service, index) => (
                    <Paper
                      key={index}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 3,
                        borderRadius: 3,
                        background: 'linear-gradient(145deg, rgba(0,198,255,0.05), rgba(0,114,255,0.05))',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'translateY(-8px) scale(1.05)',
                          boxShadow: '0 10px 25px rgba(0,198,255,0.25)',
                        },
                      }}
                    >
                      {/* Mini Icon Circle */}
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                          bgcolor: 'primary.main',
                          color: '#fff',
                          fontSize: 24,
                          fontWeight: 'bold',
                        }}
                      >
                        {index + 1}
                      </Box>

                      <Typography
                        variant="subtitle1"
                        mb={1}
                        sx={{
                          fontWeight: 'bold',
                          background: 'linear-gradient(45deg, #00c6ff, #0072ff)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          textAlign: 'center',
                        }}
                      >
                        {service.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', textAlign: 'center', lineHeight: 1.6 }}
                      >
                        {service.description}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              </Box>
            </Container>
          </AnimatedSection>

          <AnimatedSection>
            {/* Projects Section */}
            <Container id="projects" sx={{ py: 8 }}>
              <Box textAlign="center">
                <TitleWithDivider> Projects</TitleWithDivider>
                <Grid container spacing={4} justifyContent="center">
                  {projects.map((project, index) => (
                    <Grid key={index}>
                      <ProjectCard project={project} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Container>
          </AnimatedSection>
          {/* review section */}
          <Container id="reviews" sx={{ py: 8 }}>
            <Box textAlign="center" mb={6}>
              <TitleWithDivider>
                What Our Clients Say
              </TitleWithDivider>
              <Typography variant="body1" color="text.secondary">
                Trusted by businesses and individuals worldwide
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {reviews.map((review, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: { xs: 'center', md: index % 2 === 0 ? 'flex-start' : 'flex-end' },
                  }}
                  // component={motion.div}
                  // initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  // whileInView={{ opacity: 1, x: 0 }}
                  // transition={{ duration: 0.6, delay: index * 0.2 }}
                  // viewport={{ once: true }}
                >
                  <Paper
                    sx={{
                      width: { xs: '95%', md: '60%' },
                      p: 2,
                      borderRadius: 2,
                      boxShadow: '0 4px 12px hsla(224, 86%, 80%, 0.05)',
                      backgroundColor: 'background.paper',
                    }}
                  >
                    <Box display="flex" alignItems="center" mb={2} gap={2}>
                      <Avatar src={review.avatar} alt={review.name} />
                      <Box display="flex" alignItems="center" gap={0.5}>
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <StarIcon key={i} sx={{ color: '#FFD700', fontSize: '18px' }} />
                        ))}
                      </Box>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      "{review.text}"
                    </Typography>
                  </Paper>
                </Box>
              ))}
            </Box>
          </Container>

        </main>
        <footer>
          <Box sx={{
            backgroundColor: theme.palette.background.paper, py: 2, borderTopLeftRadius: { xs: "100px", lg: "500px" },
            borderTopRightRadius: { xs: "100px", lg: "500px" }, boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.1)",
          }}>
            <Container>
              <Box textAlign="center">
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    display: 'inline-block',
                    position: 'relative',
                    background: 'linear-gradient(45deg, #00c6ff, #0072ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Codelta
                </Typography>
                <Typography variant="h6" fontSize={"15px"} marginTop={"10px"}>Connecting you with innovative solutions and seamless support.</Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, justifyContent: "center", alignItems: 'center', gap: '16px', marginTop: "20px" }}>

                  {/* Email */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <EmailIcon sx={{ color: '#00c6ff' }} />
                    <Typography variant="body1">
                      <Link
                        href="mailto:contact@co-delta.com"
                        sx={{
                          color: 'text.secondary',
                          textDecoration: 'none',
                          '&:hover': { color: '#00c6ff', textDecoration: 'underline' },
                        }}
                      >
                        contact@co-delta.com
                      </Link>
                    </Typography>
                  </Box>

                  {/* Phone */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CallIcon sx={{ color: '#00c6ff' }} />
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>70 059 625</Typography>
                  </Box>

                  {/* WhatsApp */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <WhatsAppIcon sx={{ color: '#00c6ff' }} />
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      <Link
                        href="https://wa.me/96170059625"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: '#00c6ff', textDecoration: 'underline' } }}
                      >
                        70 059 625
                      </Link>
                    </Typography>
                  </Box>

                  {/* Instagram */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <InstagramIcon sx={{ color: '#00c6ff' }} />
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      <Link
                        href="https://instagram.com/codelta.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: '#00c6ff', textDecoration: 'underline' } }}
                      >
                        @codelta
                      </Link>
                    </Typography>
                  </Box>

                </Box>
              </Box>
            </Container>
          </Box>
        </footer>
        <Box component="footer" sx={{ backgroundColor: 'background.paper', py: 3, textAlign: 'center', color: 'text.secondary' }}>
          <Typography variant="body2">&copy; {new Date().getFullYear()} Codelta. All rights reserved.</Typography>
        </Box>
        {/* Footer */}

      </Box>
    </ThemeProvider >
  );
};

export default App;
