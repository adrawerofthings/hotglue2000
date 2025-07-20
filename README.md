# HOTGLUE 2000

Hi! This is a very opinionated and very work-in-progress fork of the HOTGLUE project. If you're not familiar with the HOTGLUE project, you should probably read the original project's [README](README) first. I will try to tidy up all of the documentation one day, but that day is not today.

## How HOTGLUE 2000 differs from HOTGLUE V1.04

### General design philosophy shift

The [user interface principals set out in 2014](https://github.com/k0a1a/hotglue2/wiki/Design-Codex) were as follows:

1. In editing mode pages are rendered identically to viewing mode.
2. No menus or other parts of UI shall be visible without user's request.
3. Any newly created HOTGLUE page is always blank.
4. No menu or interface shall interfere with page elements or change their position.

For this update, we broke rule number 2 to make the editing process easier, and added a few principals of our own:

5. Allow users to cycle through a series of interesting defaults rather than offering them limitless options.
6. Icon-only buttons are hard to memorize and need persistent labels.
7. Minimize the need for precision click-and-drag interactions.
8. No custom code, no cheat codes: everyone has the same tools.
9. Lean into HOTGLUE's 1990s internet collage aesthetic!

As such, while we added some features, we also temporarily disabled some that didn't fit with the new direction (or need more work to be easy-to-use).

### New features

- Mobile responsive design guide rulers and automatic centering of objects on page
- New object manipulation options: rotation, box shadow, border radius, 
- More secure "basic" authentication with hashed passwords (assuming use of SSL)
- Basic open graph/social media preview cards (title + description + URL but no image)

### Adjustments

- Almost all click-and-drag object edits replaced with click to cycle between interesting defaults.
- Icons with hover text/tool tips replaced with buttons with text labels
- Ease of access to editing and page properties with buttons at the bottom
- Slimmed down features: temporarily disabled custom CSS/HTML/JS code, grid view, background image position for page, object transparency, webfonts, embedded video autoplay/loop (doesn't work on modern browsers anyway), video uploads.

### Accessibility improvements

- Option to add alt text for images (screen reader image descriptions)
- Option to set one text object as h1
- Objects are automatically sorted on the backend so that screen readers will read them from top to bottom (not perfect but better than sorting by order of creation)

## Installation

The installation is more or less the same as the previous version. So read the old [INSTALL](INSTALL) instructions first, and the note that:

- Digest authentication is no longer a best practice option. Instead, people use basic with HTTPS-only connections and bcrypt hashed passwords.
- For local development, we recommend turning the authentication to `none`, and then turning it back on to `basic` only when you're uploading the site to go live.

### Known issues

- The edit button assumes that if there is a `.htaccess` file in the directory, then it is working properly and clean URLs are on.
- Minified files have not been updated yet.
- Poor documentation.

## Special thanks

Kudos of course to the original creators of Hotglue, Gottfried Haider and Danja Vasiliev, and also to @tschiemer for their code fixes to get Hotglue working for PHP 8.X. 