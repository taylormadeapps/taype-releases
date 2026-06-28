# Stem Splitter

Stem Splitter separates audio clips into new stem tracks. TayPE does not include stem-splitting model weights; it installs the stem splitter bundle only after you accept the model licence.

Stem splitting requires a Mac with Apple silicon. TayPE universal builds still run on Intel Macs, but this feature is unavailable there.

TayPE lists ONNX Runtime in **About -> Third-Party Dependencies**, including the bundled licence notices for the runtime used by Stem Splitter.

## Set Up Stem Splitter

Open **Tools -> Stem Splitter Setup**. TayPE shows the model licence link when the selected bundle supplies one. The **Download Stem Splitter** button installs the curated stem splitter bundle after you accept the licence.

The default bundle is HT-Demucs ONNX. It gives you three choices in the setup window:

- **Fast**: quicker rough splits using lighter overlap.
- **Balanced**: the default 4-stem HT-Demucs split.
- **High Quality**: the fine-tuned HT-Demucs specialist bundle. This is larger and slower.

All three output vocals, drums, bass, and other stems.

TayPE installs the bundle into:

```text
[TAPE_HOME]/Stem-Models
```

Advanced users can also place compatible TayPE stem bundle folders there manually. TayPE picks them up automatically; there is no in-app import or arbitrary model URL step. Bundles must be ONNX based; PyTorch files such as `.pt`, `.pth`, `.ckpt`, and `.safetensors` are not supported.

## Split Clips

Double-click an audio clip to open **Clip Properties**, then click **Split Stems**. If Stem Splitter is not set up, TayPE opens the setup dialog.

You can split multiple selected clips together only when all selected clips are audio clips on the same track. Each clip is processed independently.

Stem splitting is unavailable while TayPE is playing, recording, or printing a mix. Stop transport first, then run **Split Stems**.

## Result

TayPE creates new ordinary audio tracks directly below the source track, one per stem. Generated clips keep the original timeline positions. After a successful split, the source clips are disabled so the new stems play instead.
