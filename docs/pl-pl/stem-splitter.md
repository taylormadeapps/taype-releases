# Stem Splitter

Stem Splitter separates audio clips into new stem tracks. TayPE does not include stem-splitting model weights; it installs the stem splitter package only after you accept the model licence.

Stem splitting requires a Mac with Apple silicon. TayPE universal builds still run on Intel Macs, but this feature is unavailable there.

## Set Up Stem Splitter

Open **Tools -> Stem Splitter**. TayPE shows the model licence link when the selected package or configured download supplies one. The **Download Stem Splitter** button is enabled when a TayPE-compatible package URL and its model licence URL are configured for the build.

The default download target is HT-Demucs ONNX, a MIT-labelled 4-stem model that outputs vocals, drums, bass, and other stems.

TayPE installs packages into:

```text
[TAPE_HOME]/Stem-Models
```

Advanced users can also place compatible TayPE stem package folders there manually. TayPE picks them up automatically; there is no in-app import or arbitrary model URL step. Packages must be ONNX based; PyTorch files such as `.pt`, `.pth`, `.ckpt`, and `.safetensors` are not supported.

## Split Clips

Double-click an audio clip to open **Clip Properties**, then click **Split Stems**. If Stem Splitter is not set up, TayPE opens the setup dialog.

You can split multiple selected clips together only when all selected clips are audio clips on the same track. Each clip is processed independently.

## Result

TayPE creates new ordinary audio tracks directly below the source track, one per stem. Generated clips keep the original timeline positions. After a successful split, the source clips are disabled so the new stems play instead.
