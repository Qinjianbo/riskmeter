export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#071016',
        steel: '#10202a',
        mist: '#eaf1f4',
        muted: '#6b7b84',
        aqua: '#19c7c2',
        leaf: '#4fbe7a',
        amber: '#f3a712',
        ember: '#e45555'
      },
      boxShadow: {
        soft: '0 20px 70px rgba(7,16,22,0.16)'
      }
    }
  },
  plugins: []
};
