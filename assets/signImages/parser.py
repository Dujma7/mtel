input_file = "signsMeaningAndImage.ts"   # Replace with your input file name
output_file = "output.ts" # Replace with your desired output file name
image_prefix = "./znakoviSlike/" # Prefix for the image paths

with open(input_file, "r", encoding="utf-8") as infile, open(output_file, "w", encoding="utf-8") as outfile:
    for line in infile:
        # Extract the key-value pairs
        if (':' in line) and ("{" not in line) and ("}" not in line):
            parts = line.strip().split(':')
            image_path = parts[0].strip().strip('"')  # Remove leading/trailing quotes
            description = parts[1].strip().strip('",')  # Remove trailing comma and quotes

            # Format the new line
            new_line = f'"{description}":require("{image_prefix}{image_path}"),\n'

            # Write to output file
            outfile.write(new_line)
        else:
            outfile.write(line)

print(f"Conversion complete! Check {output_file}")
