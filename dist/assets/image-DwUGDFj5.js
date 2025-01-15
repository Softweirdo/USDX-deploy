const A="data:image/webp;base64,UklGRk4HAABXRUJQVlA4IEIHAACwIQCdASqAAIAAPm02lUekIyIhJxbaaIANiWcG+OUBt8AQp3aGfgv9nvuPSd/rt3vz2nnb78B0W/rL/6SwK8X3LP8MlDHEfVbHoyTO++y6r16AUBSqi0APFp0F/XfA/K6JFsJtjtuLJyrafVhgXYGE8PU/1lQZ0r4jDJoX644jOKlAn4+g94f+2CMJYrdBWdilVPvmTfZxyiW4QYz+8CJ0DlFZxl+9dwJivP2u7VL/z482oqwuOku8hUekAw/ddpCqx1VcS81U5ZLVHx0fmzBamxkCPqcRVIw1XTASkOCnnIaMB9eV1nzLk/f4zRzKCMpbqXEuKs16UcHUnr8fGjbcPO9N+416tlxu+uPidtETaORE4okLwAD+8I1sky7+KHqT8YKt/dD5Ve4bjliP99R2p/Hx2ohNvWANt2aZSSkKPfXtVe62kbgDuTaI3CNod02VeI8MUPvNKArIrd89odthi2n95nEX47LCADNoO5M4qeX2sYc1Mm8nPGSbHKtJdgH+ZZSBRmc3EYCeZEhscqc88MZX3h7jiX6DyBs62fBx+GzlKc6nDGJQsQWgrU1Wt5fpYX88sj2X9m+1yiWfqC/CpZh8/MFho8cTkYyfC6pRGCDw4crYCwdWLCVvjlGJL70M37d5r3uieJQs/g3+RE5P1RNP8a+bRYe3GM4KUlq1VPxcieQwKh8ls5F+ZRpF/Nr7/vjbJztERErGLlG1gOm+4qZ9WzYi6jBdBtZ6CRzvth5zyUCx/cx/XpkF6Q3FX9Vigba5DIvN31rc670NLejQD2LW4VFOPtEqaE/M96nnMSK+vhj2XZNgnhJs4/VwkuOWX06cmZa8J5eIOOnwb9aTosHTKtsvs6D2heH4n7okBYN6+OdP9jftLTeyn74PApLeUxR6D7kgH9+Y1bOkQuq3VocuRCpH8/f343UbRFQMfQ5KNNZwN5eOjf1TRYhKWMhZRq6O0lMekwPxT/EWh3t7n90mHNZSWsBW2diouupMC/kMnK9BJgirJw6fMThqkGlDxfyppuPMS09EUbnAb8O3vIaO1/mZQU0dk5jpProv2TV2ZyUkjfJLxxmzBs/IkoDMNYMAFHUbFji0AVLSMmoIVnbar/GWnjLt6sY9mLoWvrlOnCs/DZRZYvWgwImn1eAa/wfn2sLTopQAwh5KYF4sfbqxtAmbADQBzYQaOrLNNc6ffZJvzkulTZNWUheuIGHniPUG0NivUUh453VkaOAjEfrJp8HDkRywOQzu6YGdGd1dwms4q3x/SRz2NrDR++I51G57Qkja8oIOhnPt2xUfkSmdnft4ua7p83Tq07FzB2S4t/VE3XfTr2d7o2SJWX9OGCNANJ+R7XYPInfIASxJZMpvF2wHZtP9zc9gPxnA5UwWtf2XxqI7xhLa+S+HyfxJBJF9Bh5rUlcoXgP9BR27Al3wXDTxDMrC5jKJhN+EYQU5McBaKfBes/q27Fz6abH3GM7cFHp6ngyC/uFO73tYjR4IZJL4uhQK8GS3O9a1YoeYMKSa9hGEuTDeKvx+bZBNKz39c1hmuZ05+RjYyj04qfY+NWROTgV/bYAw073ATnoAqBGK9Ebk73nuEzixBh9J+5pWfcbiC/O4ME+W4jAQFhqC+m1ePPPrFLKkKPSWkBPZMTlFnGGHPaE6cGhqrBu69iXXD+5MKucxH1Ha95GOMG1OkZ23cv9gw1wuhdgVOwhB9FsFlVsr2GgCYXPl8u6P3PEb0aGxOVSImwTLLoRPceEVFYVD0ITNciWo4W4WwG8E3CPeZoSifXSVAwMzRLpYxy9ObTU05OargUxna7c2alaa3KwWFddpYFxe6IxrXADuQ4Bvpqw/yHMeknvcCz+wTx7Ne+6P7PJxXBGI8mXX0bnuH3bAKCDtSxuHz6yNAeXoBsgO5oEL18d1LSPDnDVVZagzJOW0weM20nF5TRwUo5Vw4jwG9cj8pRmwzfwY3aSlj07SlYiBmGy0agZDFmj/Z5mwrfnxkHlBDI9ZzOYStx15VMzlfYUj2640wl1LcPnqN59JjjshgTDYAafzsDPybZ9oQyd599e+lzr/S/76eYHSSi+a15pUkVwWMM8fBczE4OaHABW55Cg4mLPAVcbohbuajPRPphq2UgjfK9uZusVSllu8YiPIrs3l73f+JEZvp8XdRHgia9OC911V5t1zEk3LdGKtlKBLz95K6I+efmfI2rr6z/vW6LWCrYQrigjWuvzurtuG1/llX3ZLhLusH2G0TQFtQiLrR2o7JDQphJeFKGpjNNo64A4lCcPV8yQZ8mtLzORDF8qPQaPcI0lhPsobpa/9O4zHLvHEl8PSZUcAQ0ZvturvUeLXpGBAoiNsQQqg5QF3R6jVBBUqc4eJqJAdX131htwNBv7xVs8qNzvIecLunPTUeHRYsRmFMCVAjscSmGqonM5im6dzLBUKqS/iEklIVMHDRldjjpdm915X3xFkI1t48yA9n+yhgAAA";export{A as default};
