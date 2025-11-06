````markdown
name=README.md
```markdown
# Yücel Kimya - Statik Tanıtım Sitesi (Netlify-ready)

Bu şablon Yücel Kimya için hazırlanmış statik bir tanıtım sitesidir. Aşağıdaki eklemeler yapıldı:
- Netlify Forms ile form alacak şekilde formlar güncellendi (data-netlify ve gizli form-name input).
- Teşekkür sayfası (thanks.html) eklendi.
- Open Graph meta, favicon, sitemap.xml ve robots.txt eklendi.
- Basit SVG logo (assets/logo.svg) ve favicon (assets/favicon.svg) eklendi.
- netlify.toml ile temel Netlify konfigürasyonu sağlandı.

Hızlı deploy (Netlify):
1. Repo'yu GitHub'a taşıyın (ör. yucelkimya-site).
2. Netlify hesabınızda "New site from Git" -> Git provider (GitHub) -> repo'yu seçin.
3. Build command: (boş, çünkü statik dosyalar) | Publish directory: `/` (repo kökü) veya ihtiyaca göre `dist/`.
4. Deploy sonrası Netlify -> Site settings -> Forms kısmında gönderimleri görebilirsiniz.

Notlar / sonraki adımlar önerileri:
- assets/og-image.png gibi paylaşım görseli ekleyin ve sitemap.xml içindeki URL'leri gerçek domaine göre güncelleyin.
- Gerçek logo ve firma iletişim bilgilerini güncelleyin.
- Eğer dil desteği (EN/TR) istenirse i18n veya çoklu sayfa yapısı ekleyebiliriz.
- Alternatif olarak Vercel veya Netlify yerine kendi sunucunuza deploy etmek isterseniz form backend'i için Formspree veya basit bir serverless function (AWS Lambda / Netlify Functions) kurabiliriz.

Değişiklikleri otomatik olarak repo'ya push etmemi isterseniz (veya Netlify için bir repo oluşturmamı) söyleyin; ben de gerekli dosyaları bir GitHub reposuna ekleyip deploy adımlarını otomatikleştirebilirim.
````
