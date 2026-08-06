import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 기본 포트를 3000으로 설정하여 로컬에서 쉽게 테스트 가능하게 합니다.
    open: true  // 서버 구동 시 자동으로 브라우저를 열어줍니다.
  }
});
