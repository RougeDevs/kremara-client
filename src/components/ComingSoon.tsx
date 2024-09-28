import { Box, VStack,Text,Button,Image } from '@chakra-ui/react'
import React from 'react'
import ParticleBackground from './ParticleBackground'

const ComingSoon = () => {
  return (
    <Box>
              <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        // bgGradient="linear(to-r, gray.800, black)"
        // className={inter.className}
      >
        <ParticleBackground/>
        <VStack spacing={8}>
          {/* Kremara Title */}
          <Text fontSize="5xl" color="gray.200" fontWeight="bold" mt={8}>
            Kremara
          </Text>

          {/* Image */}
          <Image
            src="/your-image-path.png" // Replace with the actual path to your image
            alt="Coming Soon Image"
            boxSize="300px"
            objectFit="cover"
            borderRadius="full"
          />

          {/* Text */}
          <Text fontSize="lg" color="gray.400">
            We're working hard to launch our website. Stay tuned!
          </Text>

          {/* Notify Me Button */}
          <Button colorScheme="purple" size="lg" onClick={() => alert("Notify Me Clicked!")}>
            Notify Me
          </Button>
        </VStack>
      </Box>
    </Box>
  )
}

export default ComingSoon