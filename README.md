# 🎭 Playwright Automation Framework

## 📘 Overview

This is a robust and scalable **Playwright-based test automation framework** designed for end-to-end testing of web applications. The framework aims for high maintainability, code reusability, and structured reporting. It centrally manages:

- ✅ **Functions** – Custom reusable functions and utilities.
- 📂 **Data Repository** – Test data centrally stored and managed.
- 🧱 **Object Repository** – Page-object models that separate locators from test logic.
- 📊 **Allure Reporting** – Elegant, detailed test reports powered by Allure.

---

## 🏗️ Framework Architecture

```
├── tests/                     # Test specs (organized by feature/module)
├── functions/                 # Reusable utility functions
├── pages/                     # Object Repository (Page Object Models)
├── data/                      # Data Repository (JSON)
├── reports/                   # Allure generated reports
├── playwright.config.ts       # Playwright configuration
├── helpers/                   # Support scripts and wrappers
├── package.json               # Project dependencies and scripts
└── README.md                  # 📘 Framework documentation
```

---

## 🧠 Key Components

### 📂 Functions

All custom utility functions and helper methods (e.g., date handling, API wrappers, assertions) are located in the `/Functions` directory. These promote **code reusability** and eliminate code duplication across test cases.

---

### 🧱 Object Repository (POM)

We follow the **Page Object Model (POM)** pattern under the `ObjectRepo/` directory. Each page contains a class that encapsulates element locators and page-specific actions, keeping test scripts clean and readable.


---

### 📁 Data Repository

Managed under the `DataRepo/` directory, test data is stored in centralized files (JSON) allowing data-driven testing and easy maintenance.

Example:

```json
// DataRepo/HRM_UserData.json

  {
    "username": "admin",
    "password": "123456"
  }
```

---

### 📈 Allure Reporting

We integrated **Allure Reporting** for rich and interactive test reports.

#### 📦 Install Allure:

```bash
npm install -D allure-playwright
```

#### 🧪 Generate Report:

You can add the following script to `package.json`:

```json
"scripts": {
  "test": "npx playwright test",
  "report:generate": "allure generate ./allure-results --clean -o ./reports",
  "report:open": "allure open ./reports"
}
```

---


## 🚧 Future Enhancements

- 🔁 CI/CD Integration (GitHub Actions, Jenkins, etc.)
- 🌐 Cross-browser & parallel execution
- 🔐 Integration with environment configs (.env)
- 🧪 API testing module
- 📧 Email or Slack report notifications

---

## 🙌 Contributing

Pull requests, issues, and feature suggestions are welcome!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
