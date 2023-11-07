<script>
  import "../app.css";
  import '@fontsource/poppins';
  import '@fontsource/poppins/500.css';
  import '@fontsource/poppins/700.css';
</script>

<div class="w-full relative min-h-screen">
  <div class="max-w-[800px] mx-auto flex justify-center items-center p-4">
    <a href="https://www.medivest.com.my/"><img alt="IRG Logo" class="w-32" src="logo-irg.png" /></a>
  </div>

  <div class="w-full max-w-[800px] mx-auto px-4 pb-12">
    <slot />
  </div>
</div>


