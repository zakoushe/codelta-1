import React, { useMemo, useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Link, Container, Grid, Paper, CssBaseline, ThemeProvider, createTheme, IconButton } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/material/styles';
import logo from './assets/logo.jpeg';
import client1 from './assets/jabal1.png';
import client11 from './assets/jabal2.png';
import client2 from './assets/lebtar1.png';
import client21 from './assets/lebtar2.png';
import client22 from './assets/lebtar3.png';

import client3 from './assets/bob1.png';
import client4 from './assets/rent1.png';
import client41 from './assets/rent2.png';
import client5 from './assets/gofast1.png';
import client51 from './assets/gofast2.png';
import client52 from './assets/gofast3.png';
import client53 from './assets/gofast4.png';


interface TitleWithDividerProps {
  children: React.ReactNode;
}

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
        }}
      >
        {children}
      </Typography>
      {/* Divider */}
      <Box
        sx={{
          height: '4px',
          width: '60%',
          maxWidth: 200,
          bgcolor: '#B0B0B0',  // subtle gray instead of bright cyan
          mx: 'auto',
          mt: 1,
          borderRadius: 2,
        }}
      />
    </Box>
  );
};


// Function to create theme based on mode
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

// Hero Section
const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  // padding: theme.spacing(4),
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

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
  };

  return (
    <Paper
      sx={{
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden', height: '450px' }}>
        <img
          src={project.images[currentImageIndex]}
          alt={project.title}

          style={{ width: '100%', height: '100%' }}
        />
        {project.images.length > 1 && (
          <>
            <IconButton
              onClick={handlePrevious}
              sx={{
                position: 'absolute',
                top: '50%',
                left: 8,
                transform: 'translateY(-50%)',
                color: 'white',
                backgroundColor: 'rgba(0,0,0,0.5)',
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
              }}
            >
              <ArrowBackIosIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                position: 'absolute',
                top: '50%',
                right: 8,
                transform: 'translateY(-50%)',
                color: 'white',
                backgroundColor: 'rgba(0,0,0,0.5)',
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </>
        )}
      </Box>
      <Box sx={{ p: 3, flexGrow: 1, backgroundColor: 'background.paper' }}>
        <Typography
          variant="h5"
          component="h3"
          mb={1}
          sx={{ color: '#00c6ff', fontWeight: 'bold' }}
        >
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          {project.description}
        </Typography>
        <Link href={project.url} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: '#0072ff', '&:hover': { textDecoration: 'underline' } }}>
          Visit Website
        </Link>
      </Box>
    </Paper>
  );
};

const App: React.FC = () => {
  // 🌙☀️ Theme Mode State
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  // Load saved preference
  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as 'light' | 'dark' | null;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  // Save preference on change
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
    {
      title: "QR Digital Menu",
      description: "Transform the dining experience with a modern, contactless QR menu solution. Easily update your menu in real-time, provide detailed dish information, and streamline ordering for both staff and customers, enhancing convenience and operational efficiency."
    },
    {
      title: "SEO & Digital Marketing",
      description: "Boosting your online visibility through strategic SEO and digital marketing solutions. We optimize your website, improve search rankings, and drive targeted traffic to increase engagement, conversions, and brand authority."
    },

  ];


  const projects = [
    {
      title: "Jabal Amel nursery",
      description: "Developed a modern and intuitive website for Jabal Amel nursery, featuring an elegant design and an easy-to-navigate interface to showcase their services and connect with parents.",
      images: [
        client1,
        client11
      ],
      url: "https://www.jabalamelnursery.com"
    },
    {
      title: "Lebtar",
      description: "Built a comprehensive web platform for Lebtar, a leading digital solutions provider. The site highlights their expertise in various tech domains and serves as a hub for client engagement.",
      images: [
        client2,
        client21,
        client22
      ],
      url: "https://www.lebtar.com"
    },
    {
      title: "Bob’s construction",
      description: "Designed a portfolio website for Bob’s Construction, showcasing their past projects with a clean, professional layout. The site is optimized for performance and mobile viewing to attract new clients.",
      images: [
        client3
      ],
      url: "https://bobconstruction.co.uk"
    },
    {
      title: "Rent A Car",
      description: "Designed a portfolio website for Bob’s Construction, showcasing their past projects with a clean, professional layout. The site is optimized for performance and mobile viewing to attract new clients.",
      images: [
        client4,
        client41
      ],
      url: "https://www.originalrentacar.com/"
    },
    {
      title: "GO FAST",
      description: "Designed a portfolio website for Bob’s Construction, showcasing their past projects with a clean, professional layout. The site is optimized for performance and mobile viewing to attract new clients.",
      images: [
        client53,
        // client51,
        // client52,

      ],
      url: "#"
    },

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
            <IconButton color="inherit" onClick={toggleMode}>
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

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
            <Box sx={{ width: '100%', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' , }}>
              <LogoImage src={logo} alt="Codelta Logo" />
            </Box>
          </HeroSection>

          <Container id="about" sx={{ py: 8 }}>
            <TitleWithDivider  >
              About Us
            </TitleWithDivider>
            <Grid
              container
              spacing={6}
              sx={{ display: "flex", alignItems: "center", flexDirection: { xs: 'column', md: 'row' }, }}

            >
              {/* Image Side */}
              <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                  component="img"
                  src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
                  alt="Codelta Teamwork"
                  sx={{
                    width: { xs: '80%', md: '100%' },
                    maxWidth: 500,
                  }}
                />
                <Box sx={{ marginLeft: "2rem" }}>
                  <Typography
                    variant="body1"
                    sx={{ lineHeight: 1.8, color: 'text.secondary', mb: 2 }}
                  >
                    At <strong>Codelta</strong>, we turn ideas into powerful digital solutions. From
                    websites and POS systems to data solutions and custom software, we craft technology
                    that helps businesses grow and thrive. Our team blends creativity with technical
                    expertise to deliver modern, reliable, and user-friendly products for clients worldwide.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ lineHeight: 1.8, color: 'text.secondary', mb: 2 }}
                  >
                    What sets us apart is our passion for innovation and attention to detail.
                    We don’t just build software — we create experiences that connect, inspire,
                    and transform. Our approach combines cutting-edge design with robust engineering,
                    ensuring that every solution is both beautiful and functional.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ lineHeight: 1.8, color: 'text.secondary' }}
                  >
                    At our core, we believe in long-term partnerships. We work closely with
                    our clients, listening to their goals and challenges, and crafting solutions
                    tailored to their unique vision. Together, we aim to push the boundaries
                    of what’s possible in the digital world.
                  </Typography>
                </Box>
              </Grid>

            </Grid>
          </Container>

          {/* Services */}
          <Container id="services" sx={{ py: 8 }}>
            <Box textAlign="center">
              <TitleWithDivider>Our Services</TitleWithDivider>
              <Grid container spacing={4}>
                {services.map((service, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 3,
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                        },
                      }}
                    >
                      {/* Optional: Add image here if needed */}
                      <Box sx={{ p: 3, backgroundColor: 'background.paper' }}>
                        <Typography
                          variant="h5"
                          mb={2}
                          sx={{ color: '#00c6ff', fontWeight: 'bold' }}
                        >
                          {service.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {service.description}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>


          {/* Clients/Projects Section */}
          <Container id="projects" sx={{ py: 8 }}>
            <Box textAlign="center">
              <TitleWithDivider>Our Projects</TitleWithDivider>
              <Grid container spacing={4} justifyContent="center">
                {projects.map((project, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <ProjectCard project={project} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>


          {/* Contact */}
          <Container id="contact" sx={{ py: 8 }}>
            <Box textAlign="center">
              <TitleWithDivider>Get In Touch</TitleWithDivider>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <EmailIcon sx={{ color: '#00c6ff' }} />
                  <Typography variant="body1">
                    <Link href="mailto:contact@co-delta.com" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: '#00c6ff', textDecoration: 'underline' } }}>
                      contact@co-delta.com
                    </Link>
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CallIcon sx={{ color: '#00c6ff' }} />
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>70 059 625</Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </main>

        {/* Footer */}
        <Box component="footer" sx={{ backgroundColor: 'background.paper', py: 3, textAlign: 'center', color: 'text.secondary' }}>
          <Typography variant="body2">&copy; {new Date().getFullYear()} Codelta. All rights reserved.</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
