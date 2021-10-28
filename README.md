# Tauri Template

- **Tauri**
- **GitHub action** for cross-platform builds
- **Builds for macOS 10.13+**
- **Svelte**
- **Vite**
- **TypeScript**
- **`svelte-preprocess`** with Sass installed by default
- **Hot module replacement**
- **ESLint**
- **Prettier**

## Dev instructions

1. Install Node.js (v14 works)
2. Install Rust (v1.54 works)
3. Follow the [Tauri setup guide](https://tauri.studio/en/docs/getting-started/intro)
4. Run `npm install`

### Commands
- `npm run dev`: Start app in dev mode
- `npm run build`: Build
- `npm run lint`: Lint

### Release new version
1. Update `CHANGELOG.md`
2. Manually bump the version number in `src-tauri/Cargo.toml`
3. Check for errors and bump the `Cargo.lock` version number
    ```
    cargo check --manifest-path src-tauri/Cargo.toml
    ```
4. Dispatch the GitHub Release workflow and wait
5. Add release notes to the generated GitHub release and publish it
