function showAlert(service) {
  alert(`You clicked on ${service}! This feature is under development.`);
}

const ctx = document.getElementById('analyticsChart').getContext('2d');
const analyticsChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Course A', 'Course B', 'Course C', 'Course D', 'Course E'],
    datasets: [{
      label: 'Predicted Average Grade',
      data: [75, 82, 68, 90, 77],
      backgroundColor: [
        '#e74c3c', '#8e44ad', '#3498db', '#27ae60', '#f1c40f'
      ]
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});
