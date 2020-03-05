export const fetchList = () => (
  $.ajax({
    method: 'GET',
    url: '/api/lists'
  })
);
