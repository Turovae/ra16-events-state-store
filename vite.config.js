import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(( {command} ) => {
  console.log(command);

  const setting = {
    plugins: [react()],
  };

  if (command === 'build') setting.base = 'https://turovae.github.io/ra16-events-state-store/'

  return setting;
});
