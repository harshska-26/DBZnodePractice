// Controller to process actions in Characters.json.items
// If an item has key 'create', create the character; if 'delete', delete the character

const fs = require('fs');
const path = require('path');
const charactersFile = path.join(__dirname, '../Characters.json');

// Utility to read Characters.jsonunction readCharactersFile() {
    const data = fs.readFileSync(charactersFile, 'utf-8');
    return JSON.parse(data);
}

// Utility to write Characters.json
function writeCharactersFile(data) {
    fs.writeFileSync(charactersFile, JSON.stringify(data, null, 2), 'utf-8');
}

// Main controller function
function ProcessCharActionsController(req, res) {
    try {
        const data = readCharactersFile();
        if (!Array.isArray(data.items)) {
            return res.status(400).json({ error: 'Invalid items array in Characters.json' });
        }
        let changed = false;
        data.items.forEach((item, idx) => {
            if (item.create) {
                // Add the character if not already present
                if (!data.characters) data.characters = [];
                const exists = data.characters.some(c => c.name === item.create.name);
                if (!exists) {
                    data.characters.push(item.create);
                    changed = true;
                }
            }
            if (item.delete) {
                // Remove the character if present
                if (data.characters) {
                    const before = data.characters.length;
                    data.characters = data.characters.filter(c => c.name !== item.delete.name);
                    if (data.characters.length !== before) changed = true;
                }
            }
        });
        if (changed) {
            writeCharactersFile(data);
        }
        res.json({ success: true, changed });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { ProcessCharActionsController };