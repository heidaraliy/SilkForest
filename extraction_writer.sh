output_file="combined_code.txt"

echo "extraction_writer: starting code extraction..."

# remove the output file if it exists
rm -f "$output_file"

find . -type f \( -name "*.ts" -o -name "*.tsx" \) \
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
