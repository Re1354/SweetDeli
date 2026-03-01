# Frontend Component Structure

> 📐 Component breakdown from Figma designs for SweetDeli

## 🎨 Design Principles

- **Mobile-first responsive design**
- **Reusable components** with props
- **Clean JSX** - no inline mess
- **Proper folder structure**
- **Tailwind CSS** utility classes

---

## 📂 Folder Structure

```
client/src/
├── components/
│   ├── common/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── home/
│       ├── HeroSection.jsx
│       ├── ServiceSlider.jsx
│       ├── ProductCard.jsx
│       ├── PopularProducts.jsx
│       ├── CategoryIcons.jsx
│       ├── Features.jsx
│       ├── VideoSection.jsx
│       ├── Testimonials.jsx
│       └── Newsletter.jsx
├── context/
│   └── AuthContext.jsx
├── services/
│   └── api.js
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   └── Register.jsx
├── App.jsx
└── main.jsx
```

---

## 🧩 Component Specifications

### Global Components

#### 1. **Navbar**

- **Location**: Fixed top
- **Elements**:
  - Logo (left)
  - Navigation links (center): Home, Products, About, Contact
  - User menu (right): Login/Logout dropdown with registration option
  - Mobile hamburger menu
- **States**: Desktop, Mobile, Authenticated/Unauthenticated
- **Integration**: Uses AuthContext for authentication state

#### 2. **Footer**

- **Sections**:
  - Brand info & contact details
  - Product links
  - About links
  - App download buttons (App Store, Google Play)
  - Social media icons
  - Language selector
  - Copyright information
- **Style**: Light background with grid layout
- **Responsive**: Stacks on mobile

---

### Home Page Components

#### 3. **HeroSection**

- **Layout**: Full-width banner
- **Elements**:
  - Large heading
  - Subheading/tagline
  - CTA button
  - Hero image
- **Style**: Clean, modern design with call-to-action

#### 4. **ServiceSlider**

- **Type**: Horizontal service showcase
- **Elements**: Service cards with navigation dots
- **Style**: Minimalist cards with centered content

#### 5. **ProductCard**

- **Reusable**: Used in multiple sections
- **Elements**:
  - Product image with fallback
  - Product name
  - Price
  - Badge (Bestseller, New, etc.)
  - Rating and emoji
  - "Add to cart" button
- **Image Loading**: Uses Vite's import.meta.url for dynamic image loading
- **Props**: `product` (object with id, image, name, price, rating, badge,
  emoji)

#### 6. **PopularProducts**

- **Layout**: Grid (4 columns on desktop, 2 on tablet, 1 on mobile)
- **Contains**: Multiple `ProductCard` components
- **Features**: Navigation arrows, "See All" button

#### 7. **CategoryIcons**

- **Layout**: Horizontal row of category circles
- **Elements per card**:
  - Circular background
  - Category icon/emoji
  - Category name
- **Count**: 6 categories
- **Responsive**: Horizontally scrollable

#### 8. **Features**

- **Layout**: 3-column grid
- **Elements per feature**:
  - Icon
  - Title
  - Description
- **Features**: Quality, convenience, customer service highlights

#### 9. **VideoSection**

- **Layout**: Full-width section with "Why Choose Us" theme
- **Elements**:
  - Embedded YouTube video (1120×444px)
  - Section heading and description
- **Style**: Centered content with rounded video container

#### 10. **Testimonials**

- **Layout**: Testimonial cards
- **Elements per testimonial**:
  - Customer photo
  - Name
  - Rating
  - Review text

#### 11. **Newsletter**

- **Layout**: Centered section
- **Elements**:
  - Heading and subtext
  - Email input with validation
  - Subscribe button
  - Image row (4 placeholder images in gray background)
- **Validation**: Email format check with error/success states
- **Integration**: Connects to backend newsletter API

---

## 📄 Page Specifications

### Home Page

**Components stack** (top to bottom):

1. Navbar
2. HeroSection
3. ServiceSlider
4. PopularProducts
5. CategoryIcons
6. Features
7. VideoSection
8. Testimonials
9. Newsletter (with image row)
10. Footer

### Login Page

- **Layout**: Two-column (dark left panel, white right form)
- **Left Panel**:
  - Logo badge
  - Welcome message
  - Image placeholder
- **Right Panel**:
  - Email input
  - Password input
  - "Forgot password?" link
  - Submit button
  - Social login buttons (Google, Apple, Facebook)
  - "Don't have an account? Sign Up" link
- **Integration**: Uses AuthContext for authentication

### Register Page

- **Layout**: Two-column (dark left panel, white right form)
- **Left Panel**:
  - Logo badge
  - Welcome message
  - Image placeholder
- **Right Panel**:
  - Full name input
  - Email input
  - Password input
  - Confirm password input
  - Terms & conditions checkbox
  - Submit button
  - Social login buttons (Google, Apple, Facebook)
  - "Already have an account? Sign In" link
- **Integration**: Uses AuthContext for registration

---

## 🎨 Color Palette

```css
Dark Panels: #353945, #3A3F51
Input Backgrounds: #E8EDF2
Text Colors:
  - Headings: #27272E
  - Labels: #425466
  - Light: #777E90
Backgrounds:
  - Light: #FCFCFD, #F7F8FA
  - Accent: #B8BBC3
Buttons: Black (#000000)
```

---

## 📱 Responsive Breakpoints

```css
Mobile: < 640px
Tablet: 640px - 1024px
Desktop: > 1024px
```

---

## ✅ Implementation Status

- [x] Setup React project with Vite
- [x] Install Tailwind CSS
- [x] Install React Router
- [x] Install Axios for API calls
- [x] Create common components (Navbar, Footer)
- [x] Create AuthContext for authentication
- [x] Build Login page with social login options
- [x] Build Register page with validation
- [x] Create all Home page sections
- [x] Implement responsive design
- [x] Connect authentication to backend
- [x] Add loading and error states
- [x] Newsletter integration with backend

---

**Status**: Production Ready - All core features implemented
