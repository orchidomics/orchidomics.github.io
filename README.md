# My Website

A static website (plain HTML, CSS, JavaScript) ready for GitHub Pages. The structure is inspired by a research-lab site: Home, Research, People, Resources, Publications, News, Photos.

## Edit your content

1. Open `site.js` and change the `SITE` block at the top (name, email, institution, address). The header, footer, and contact info update on every page.
2. Edit the menu in the `NAV` list in `site.js` if you want to add or remove pages.
3. Replace the placeholder text in each `.html` file with your own.
4. Add images to an `images/` folder and reference them with `<img src="images/photo.jpg" alt="...">`.

## Preview locally

Open `index.html` in your browser, or run:

```bash
python3 -m http.server 8000
```

then visit http://localhost:8000.

## Publish on GitHub Pages

1. Create a new repository on GitHub. For a personal site, name it `YOUR-USERNAME.github.io`.
2. Upload all files in this folder (or push them with git):

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

3. On GitHub, go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
4. After a minute or two, your site is live at `https://YOUR-USERNAME.github.io/` (or `/YOUR-REPO/` for a project repo).

## Custom domain (optional)

In **Settings → Pages → Custom domain**, enter your domain and add the DNS records GitHub shows you.
