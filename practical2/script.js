// Configuration and Constants
const API_KEY = 'bdefc1f71498ca2d5026dea7f216899f';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const PLACEHOLDER_API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Local state to store saved locations
let savedLocations = [];

// Initialize application
document.addEventListener('DOMContentLoaded', () => {

  // Tab switching functionality
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {

      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));

      // Add active class to clicked tab
      tab.classList.add('active');

      // Hide all tab contents
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });

      // Show selected tab content
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });

  // GET Request: Weather Data
  document.getElementById('getForm').addEventListener('submit', getWeather);

  // POST Request: Save Location
  document.getElementById('postForm').addEventListener('submit', saveLocation);

  // Load initial saved locations
  fetchSavedLocations();
});


// Utility Functions
function displayResponseInfo(method, url, status, data) {
  const responseEl = document.getElementById('responseInfo');

  responseEl.innerHTML = `
    URL: ${url}
    Status: ${status}
    Response:
    ${JSON.stringify(data, null, 2)}
  `;
}


// GET Request Implementation
async function getWeather(e) {
  e.preventDefault();

  const city = document.getElementById('city').value.trim();

  if (!city) {
    alert('Please enter a city name');
    return;
  }

  const weatherDiv = document.getElementById('weatherResult');

  try {
    const url = `${WEATHER_API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);

    const data = await response.json();

    displayResponseInfo('GET', url, response.status, data);

    if (response.ok) {
      weatherDiv.innerHTML = `
        <div class="weather-card">
          <h3>${data.name}, ${data.sys.country}</h3>
          <p>Temperature: ${data.main.temp} °C</p>
          <p>Description: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
        </div>
      `;
    } else {
      throw new Error(data.message);
    }

  } catch (error) {
    weatherDiv.innerHTML = `<p style="color:red">${error.message}</p>`;
  }
}


// POST Request Implementation
async function saveLocation(e) {
  e.preventDefault();

  const name = document.getElementById('locationName').value.trim();
  const city = document.getElementById('locationCity').value.trim();
  const country = document.getElementById('country').value.trim();
  const notes = document.getElementById('notes').value.trim();

  if (!name || !city) {
    alert('Please enter at least a name and city');
    return;
  }

  try {
    const newLocation = {
      title: name,
      body: JSON.stringify({
        city,
        country,
        notes
      }),
      userId: 1
    };

    const response = await fetch(PLACEHOLDER_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newLocation)
    });

    const data = await response.json();

    displayResponseInfo('POST', PLACEHOLDER_API_URL, response.status, data);

    if (!response.ok) throw new Error('Failed to save location');

    const savedLocation = {
      id: data.id,
      name,
      city,
      country,
      notes
    };

    savedLocations.push(savedLocation);
    renderSavedLocations();

    document.getElementById('locationName').value = '';
    document.getElementById('locationCity').value = '';
    document.getElementById('country').value = '';
    document.getElementById('notes').value = '';

    document.querySelector('[data-tab="get"]').click();

  } catch (error) {
    alert(error.message);
  }
}


// Fetch saved locations (simulated)
async function fetchSavedLocations() {
  try {
    const response = await fetch(`${PLACEHOLDER_API_URL}?_limit=5`);
    const data = await response.json();

    savedLocations = data.map(item => {
      let city = '';
      let country = '';
      let notes = '';

      try {
        const body = JSON.parse(item.body);
        city = body.city || '';
        country = body.country || '';
        notes = body.notes || '';
      } catch (e) {}

      return {
        id: item.id,
        name: item.title,
        city,
        country,
        notes
      };
    });

    renderSavedLocations();

  } catch (error) {
    console.error('Error fetching saved locations:', error);
  }
}


// Render saved locations
function renderSavedLocations() {
  const container = document.getElementById('savedLocations');

  if (savedLocations.length === 0) {
    container.innerHTML = '<p>No saved locations. Add one in the "POST Location" tab.</p>';
    return;
  }

  container.innerHTML = savedLocations.map(location => `
    <div class="location-card">
      <h4>${location.name}</h4>
      <p>${location.city}${location.country ? ', ' + location.country : ''}</p>
      <p>${location.notes || ''}</p>

      <div class="location-actions">
        <button class="btn-edit" onclick="editLocation(${location.id})">Edit</button>
        <button class="btn-delete" onclick="deleteLocation(${location.id})">Delete</button>
      </div>
    </div>
  `).join('');
}


// PUT Request (Edit)
function editLocation(id) {
  const location = savedLocations.find(loc => loc.id === id);
  if (!location) return;

  document.getElementById('edit-id').value = location.id;
  document.getElementById('edit-name').value = location.name;
  document.getElementById('edit-city').value = location.city;
  document.getElementById('edit-country').value = location.country;
  document.getElementById('edit-notes').value = location.notes;

  document.getElementById('edit-modal').style.display = 'block';
}


// Update Location
async function updateLocation() {
  const id = document.getElementById('edit-id').value;
  const name = document.getElementById('edit-name').value.trim();
  const city = document.getElementById('edit-city').value.trim();
  const country = document.getElementById('edit-country').value.trim();
  const notes = document.getElementById('edit-notes').value.trim();

  if (!name || !city) {
    alert('Please enter at least a name and city');
    return;
  }

  try {
    const updatedLocation = {
      title: name,
      body: JSON.stringify({ city, country, notes }),
      userId: 1
    };

    const response = await fetch(`${PLACEHOLDER_API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedLocation)
    });

    const data = await response.json();

    displayResponseInfo('PUT', `${PLACEHOLDER_API_URL}/${id}`, response.status, data);

    if (!response.ok) throw new Error('Failed to update location');

    const index = savedLocations.findIndex(loc => loc.id == id);
    if (index !== -1) {
      savedLocations[index] = { id, name, city, country, notes };
    }

    renderSavedLocations();
    document.getElementById('edit-modal').style.display = 'none';

  } catch (error) {
    alert(error.message);
  }
}


// DELETE Request
async function deleteLocation(id) {
  if (!confirm('Are you sure you want to delete this location?')) return;

  try {
    const response = await fetch(`${PLACEHOLDER_API_URL}/${id}`, {
      method: 'DELETE'
    });

    displayResponseInfo('DELETE', `${PLACEHOLDER_API_URL}/${id}`, response.status, {});

    if (!response.ok) throw new Error('Failed to delete location');

    savedLocations = savedLocations.filter(loc => loc.id !== id);
    renderSavedLocations();

  } catch (error) {
    alert(error.message);
  }
}