# Frontend Documentation

This project provides the frontend for a web application that includes features such as user registration, updating user information, and making payments. The frontend is built using React and follows a clean and modular structure for easy maintenance and scalability.

## Features

### 1. User Registration
- Users can register by providing their basic information (e.g., name, email, password, etc.).
- A registration form ensures all required fields are filled out.
- Form validation is implemented for better user experience.
- After successful registration, users are redirected to the login page.

### 2. User Update
- Users can update their personal details (e.g., name, email, etc.).
- Changes can be saved and updated in the backend database after form submission.
- A success message is displayed upon successful update.

### 3. Payment Form
- Users can submit payment details, including the card number, CVV, and the name on the card.
- The form also allows users to view the price of the product/service they are paying for (e.g., ₹500).
- After payment submission, the user is redirected to a success page showing payment details, including the entered card information.
- The payment status is marked as "Pending" until submission, and then the user is informed of the successful payment status.

## Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (preferably version 14 or higher)
- npm (Node Package Manager)

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   cd <project_folder>
