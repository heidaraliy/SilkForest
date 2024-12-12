output_file="combined_code.txt"

echo "extraction_writer: starting code extraction..." > "$output_file"

echo -e "\n---- File Tree ----\n" >> "$output_file"
echo "extraction_writer: generating file tree..."
tree -I "node_modules|.git|build|dist" -P "*.ts|*.tsx|*.d.ts|*.json|*.js|*.jsx" >> "$output_file"

echo -e "\n---- Code Files ----\n" >> "$output_file"

find . -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.d.ts" -o -name "*.json" -o -name "*.js" -o -name "*.jsx" \) \
  ! -path "*/node_modules/*" \
  ! -path "*/.git/*" \
  ! -path "*/build/*" \
  ! -path "*/dist/*" \
  -print0 | while IFS= read -r -d '' file; do
    echo -e "\n---- $file ----\n" >> "$output_file"
    echo "extraction_writer: concatenating $file..."
    cat "$file" >> "$output_file"
done

echo "extraction_writer: extraction complete. output file: $output_file"