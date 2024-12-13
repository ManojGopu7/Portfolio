import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setError('');

      // Send form data to EmailJS
      emailjs
        .sendForm(
          'service_layttlu', // Replace with your EmailJS service ID
          'template_52zgz69', // Replace with your EmailJS template ID
          e.target, // Form element
          '9zGG3SZo3bNahdeg_' // Replace with your EmailJS user ID
        )
        .then(
          (result) => {
            alert('Your message has been sent!');
            console.log(result);
            setFormData({ name: '', email: '', message: '' }); // Clear form
            setIsSubmitted(false);
          },
          (error) => {
            console.log(error);
            alert('An error occurred, please try again later.');
            setIsSubmitted(false);
          }
        );
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <Box id="contact"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#e9edc9',
        padding: '20px',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          width: '100%',
          maxWidth: 600,
          borderRadius: '16px',
          backgroundColor: '#ccd5ae',
          color: '#333',
          boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
          },
        }}
      >
        <Typography variant="h5" align="center" gutterBottom sx={{ fontSize:'xx-large',fontWeight: 'bold', color: '#333' }}>
        Contact Me
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 3 }}>
                    Let's create something amazing together.
                </Typography>

        {error && (
          <Typography color="error" align="center" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Full Name"
            variant="outlined"
            fullWidth
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                borderRadius: '9px',
                backgroundColor: '#f7f7f7',
                '& fieldset': {
                  borderColor: '#ddd',
                },
                '&:hover fieldset': {
                  borderColor: '#333',
                },
              },
            }}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            name="email"
            label="Email Address"
            variant="outlined"
            fullWidth
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                borderRadius: '9px',
                backgroundColor: '#f7f7f7',
                '& fieldset': {
                  borderColor: '#ddd',
                },
                '&:hover fieldset': {
                  borderColor: '#333',
                },
              },
            }}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            name="message"
            label="Your Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                backgroundColor: '#f7f7f7',
                '& fieldset': {
                  borderColor: '#ddd',
                },
                '&:hover fieldset': {
                  borderColor: '#333',
                },
              },
            }}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Box sx={{ textAlign: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#f39c12',
                color: '#ffffff',
                padding: '10px 20px',
                fontSize: '1rem',
                fontWeight: 'bold',
                borderRadius: '8px',
                '&:hover': {
                    backgroundColor: '#d35400',
                },
            }}
              disabled={isSubmitted}
            >
              {isSubmitted ? 'Submitting...' : 'Submit'}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ContactForm;
