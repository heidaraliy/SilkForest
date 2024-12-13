output_code_file="combined_code.txt"
output_docs_file="markdown_docs.txt"

echo "extraction_writer: starting code extraction..." > "$output_code_file"
echo "extraction_writer: starting markdown extraction..." > "$output_docs_file"

echo -e "\n---- File Tree ----\n" >> "$output_code_file"
echo "extraction_writer: generating file tree for code..."
tree -I "node_modules|.git|build|dist" -P "*.ts|*.tsx|*.d.ts|*.json|*.js|*.jsx" >> "$output_code_file"

echo -e "\n---- Code Files ----\n" >> "$output_code_file"

find . -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.d.ts" -o -name "*.json" -o -name "*.js" -o -name "*.jsx" \) \
  ! -path "*/node_modules/*" \
  ! -path "*/.git/*" \
  ! -path "*/build/*" \
  ! -path "*/dist/*" \
  -print0 | while IFS= read -r -d '' file; do
    echo -e "\n---- $file ----\n" >> "$output_code_file"
    echo "extraction_writer: concatenating $file into code output..."
    cat "$file" >> "$output_code_file"
done

echo "extraction_writer: starting markdown concatenation..."
echo -e "\n---- Markdown Files ----\n" >> "$output_docs_file"

find . -type f -name "*.md" \
  ! -path "*/node_modules/*" \
  ! -path "*/.git/*" \
  ! -path "*/build/*" \
  ! -path "*/dist/*" \
  -print0 | while IFS= read -r -d '' mdfile; do
    echo -e "\n---- $mdfile ----\n" >> "$output_docs_file"
    echo "extraction_writer: concatenating $mdfile into markdown output..."
    cat "$mdfile" >> "$output_docs_file"
done

echo "extraction_writer: extraction complete."
echo "Code output file: $output_code_file"
echo "Markdown output file: $output_docs_file"