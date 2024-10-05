import time
import json
import random
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Set the path to your Chrome executable
chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"  # Ensure this is correct

# Set the path to your ChromeDriver executable
chromedriver_path = r"C:\Users\flyin\Downloads\chromedriver-win64\chromedriver-win64\chromedriver.exe"  # Ensure this is the correct path to your ChromeDriver

# Set up Chrome options
options = Options()
options.binary_location = chrome_path  # Specify the path to Chrome
options.add_argument('--headless')  # Enable headless mode
options.add_argument('--no-sandbox')  # Bypass OS security model
options.add_argument('--disable-dev-shm-usage')  # Overcome limited resource problems
options.add_argument('--window-size=1920x1080')  # Set a default window size

# Rotate user-agent strings
user_agents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:54.0) Gecko/20100101 Firefox/54.0",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134",
    # Add more user-agent strings as needed
]

# Initialize the WebDriver
service = Service(chromedriver_path)
options.add_argument(f'user-agent={random.choice(user_agents)}')
driver = webdriver.Chrome(service=service, options=options)

# Function to scrape winner projects from a specific page
def scrape_winner_projects(page_number):
    print(f"Scraping page {page_number}...")
    url = f"https://devpost.com/software/search?page={page_number}&query=is%3Awinner"
    print(f"Visiting URL: {url}")  # Debugging output
    
    retries = 3
    for attempt in range(retries):
        try:
            driver.get(url)
            # Wait for the project cards to load
            WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CLASS_NAME, "gallery-item"))
            )
            print("Page loaded successfully.")
            
            # Find all project links
            project_cards = driver.find_elements(By.CLASS_NAME, "gallery-item")
            project_links = [card.find_element(By.TAG_NAME, "a").get_attribute("href") for card in project_cards]
            
            print(f"Found {len(project_links)} projects on page {page_number}.")
            return project_links
        except Exception as e:
            print(f"Error occurred on page {page_number} (attempt {attempt + 1}): {e}")
            time.sleep(2 ** attempt)  # Exponential backoff
    return []

# Function to scrape all pages
def scrape_all_winner_projects():
    all_project_links = []
    total_pages = 50  # Total number of pages to scrape
    
    for page_number in range(1, total_pages + 1):
        try:
            print(f"Starting scrape for page {page_number}")
            project_links = scrape_winner_projects(page_number)
            if not project_links:
                print(f"No projects found on page {page_number}.")
            else:
                all_project_links.extend(project_links)
                print(f"Total projects collected so far: {len(all_project_links)}")
        except Exception as e:
            print(f"Skipping page {page_number} due to error: {e}")
        
        # Add a randomized delay to prevent overloading the server and avoid rate limiting
        time.sleep(random.uniform(4, 13))  # Adjust this value based on the site's rate limits

    return all_project_links

# Function to extract description from a project link
def extract_description(project_link):
    print(f"Extracting description from {project_link}")
    retries = 3
    for attempt in range(retries):
        try:
            driver.get(project_link)
            # Wait for the description to load
            WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.TAG_NAME, "h2"))
            )
            print("Project page loaded successfully.")
            
            # Extract the description
            description_elements = driver.find_elements(By.XPATH, "//div//p")
            description = "\n".join([element.text for element in description_elements])
            
            print(f"Extracted description from {project_link}")
            return description
        except Exception as e:
            print(f"Error occurred while extracting description from {project_link} (attempt {attempt + 1}): {e}")
            time.sleep(2 ** attempt)  # Exponential backoff
    return ""

# Function to save descriptions to a JSON file
def save_to_json(data, filename):
    with open(filename, 'w') as f:
        json.dump(data, f, indent=4)
    print(f"Data saved to {filename}")

# Example usage
if __name__ == "__main__":
    all_project_links = scrape_all_winner_projects()
    print(f"Total project links: {len(all_project_links)}")
    
    projects_data = []
    total_links = len(all_project_links)
    for index, link in enumerate(all_project_links, start=1):
        print(f"Processing description {index} of {total_links}")
        try:
            description = extract_description(link)
            projects_data.append({"description": description})
        except Exception as e:
            print(f"Skipping project {index} due to error: {e}")
        
        # Add a randomized delay to prevent overloading the server and avoid rate limiting
        time.sleep(random.uniform(5, 15))  # Adjust this value based on the site's rate limits
    
    # Save the descriptions to a JSON file
    save_to_json(projects_data, 'project_descriptions.json')

    # Close the driver
    driver.quit()