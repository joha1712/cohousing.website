var config = (function() {
    
  const baseApiUrl = process.env.BASE_API_URL;
  
  return {
    baseApiUrl : baseApiUrl
  }
})();

export { config }