# Creating a ssh key with secure algorithm

## When creating an SSH key, it is generally recommended to prefer Ed25519 over SSH-RSA for several reasons:

1. **Enhanced Security**: Ed25519 uses Curve25519, which is considered to have strong security properties and is less susceptible to certain cryptographic attacks that can affect other curves and algorithms.

2. **Performance**: Ed25519 is designed for high performance. It offers fast key generation, signing, and verification processes compared to RSA.

3. **Compact Keys**: Despite their shorter length, Ed25519 keys provide security comparable to much longer RSA keys, with a fixed size of 256 bits, offering similar security to a 3072-bit RSA key.

4. **Side-channel Resistance**: The Ed25519 algorithm is designed to be resistant to side-channel attacks, which could potentially leak private key information from RSA keys.

5. **Future-proofing**: As advancements in quantum computing continue, there are concerns about the future security of RSA. While Ed25519 is not quantum-resistant, the cryptographic community is actively working on developing and promoting algorithms that are secure against quantum attacks.

## Command:
`ssh-keygen -t ed25519 -C "your@email.com"`
