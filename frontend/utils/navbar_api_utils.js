export const fetchNavbarInfo = () => (
  $.ajax({
    method: 'GET',
    url: '/api/navbar'
  })
);
