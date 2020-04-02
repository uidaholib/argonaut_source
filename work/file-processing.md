# getting new argos ready

Dowload PDFs from shared OneDrive.

each PDF is in it's own folder named with the issue date.

use pattern to rename and reorganize pdfs.

Recursive cp + rename:

for f in ./**/*.pdf; do NAME="${f#./}"; cp "$f" ./"arg-${NAME%-Argonaut*.pdf}.pdf"; done

Resize PDFs to more reasonable size??
