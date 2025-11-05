import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Watch Glossary | WatchHub",
  description: "Comprehensive glossary of watch terminology, movements, and horological terms.",
}

export default function GlossaryPage() {
  const glossaryTerms = [
    {
      letter: "A",
      terms: [
        {
          term: "Automatic Movement",
          definition:
            "A self-winding mechanical movement that uses the natural motion of the wearer's wrist to wind the mainspring. Also known as a self-winding movement.",
        },
        {
          term: "Amplitude",
          definition:
            "The angle through which the balance wheel rotates in one direction. Typically measured in degrees, with 270-315 degrees being ideal.",
        },
        {
          term: "Anti-Magnetic",
          definition:
            "A watch designed to resist the effects of magnetic fields, typically using special alloys or a soft iron cage around the movement.",
        },
      ],
    },
    {
      letter: "B",
      terms: [
        {
          term: "Balance Wheel",
          definition:
            "The oscillating wheel in a mechanical watch movement that regulates timekeeping. It swings back and forth at a constant rate.",
        },
        {
          term: "Bezel",
          definition:
            "The ring surrounding the watch crystal. Can be fixed or rotating, and may feature markings for timing or calculation functions.",
        },
        {
          term: "Bridge",
          definition:
            "A metal plate that holds various components of the movement in place, typically visible through a display caseback.",
        },
      ],
    },
    {
      letter: "C",
      terms: [
        {
          term: "Chronograph",
          definition:
            "A watch with a stopwatch function, typically featuring additional subdials and pushers to start, stop, and reset the timing mechanism.",
        },
        {
          term: "Chronometer",
          definition:
            "A high-precision watch that has been tested and certified by an official testing institute (like COSC) to meet specific accuracy standards.",
        },
        {
          term: "Complication",
          definition:
            "Any function on a watch beyond basic timekeeping, such as a date display, moon phase, or chronograph.",
        },
        {
          term: "Crown",
          definition: "The knob on the side of a watch case used to set the time and date, and to wind manual watches.",
        },
      ],
    },
    {
      letter: "D",
      terms: [
        {
          term: "Date Window",
          definition: "An aperture in the dial that displays the current date, typically at the 3 o'clock position.",
        },
        {
          term: "Dive Watch",
          definition:
            "A watch designed for underwater diving, featuring water resistance of at least 100 meters, a unidirectional rotating bezel, and high visibility.",
        },
        {
          term: "Display Caseback",
          definition:
            "A transparent caseback, usually made of sapphire crystal, that allows viewing of the watch movement.",
        },
      ],
    },
    {
      letter: "E",
      terms: [
        {
          term: "Escapement",
          definition:
            "The mechanism that controls the release of energy from the mainspring to the gear train, regulating the watch's timekeeping.",
        },
        {
          term: "ETA Movement",
          definition:
            "A movement manufactured by ETA SA, a Swiss company that produces movements used by many watch brands.",
        },
      ],
    },
    {
      letter: "G",
      terms: [
        {
          term: "GMT",
          definition:
            "Greenwich Mean Time. A GMT watch can display two or more time zones simultaneously, useful for travelers.",
        },
        {
          term: "Guilloché",
          definition:
            "A decorative engraving technique that creates intricate, repetitive patterns on watch dials or cases.",
        },
      ],
    },
    {
      letter: "H",
      terms: [
        {
          term: "Hairspring",
          definition:
            "A delicate spiral spring attached to the balance wheel that controls its oscillation rate, crucial for accurate timekeeping.",
        },
        {
          term: "Hacking",
          definition:
            "A feature that stops the seconds hand when the crown is pulled out, allowing for precise time setting.",
        },
        {
          term: "Horology",
          definition: "The study and measurement of time, and the art of making timepieces.",
        },
      ],
    },
    {
      letter: "L",
      terms: [
        {
          term: "Lug-to-Lug",
          definition:
            "The distance from the top lug to the bottom lug of a watch case, important for determining how a watch will fit on the wrist.",
        },
        {
          term: "Luminous",
          definition:
            "Material applied to watch hands and markers that glows in the dark, typically using Super-LumiNova or tritium.",
        },
      ],
    },
    {
      letter: "M",
      terms: [
        {
          term: "Mainspring",
          definition: "The coiled spring in a mechanical watch that stores energy and powers the movement when wound.",
        },
        {
          term: "Manual Wind",
          definition: "A mechanical watch that must be wound by hand using the crown to power the mainspring.",
        },
        {
          term: "Moon Phase",
          definition: "A complication that displays the current phase of the moon through an aperture in the dial.",
        },
      ],
    },
    {
      letter: "P",
      terms: [
        {
          term: "Power Reserve",
          definition:
            "The amount of time a watch will continue running after being fully wound, typically 38-72 hours for automatic watches.",
        },
        {
          term: "Pusher",
          definition: "A button on the watch case used to operate complications like chronographs or alarms.",
        },
      ],
    },
    {
      letter: "Q",
      terms: [
        {
          term: "Quartz Movement",
          definition:
            "A battery-powered movement that uses a quartz crystal oscillator to keep time with high accuracy.",
        },
      ],
    },
    {
      letter: "R",
      terms: [
        {
          term: "Rotor",
          definition:
            "The weighted, semi-circular component in an automatic watch that rotates with wrist movement to wind the mainspring.",
        },
        {
          term: "Running Seconds",
          definition: "A seconds hand that sweeps continuously around the dial, also called a sweep seconds hand.",
        },
      ],
    },
    {
      letter: "S",
      terms: [
        {
          term: "Sapphire Crystal",
          definition:
            "A synthetic crystal used for watch crystals and casebacks, highly scratch-resistant and transparent.",
        },
        {
          term: "Screw-Down Crown",
          definition: "A crown that threads into the case to create a water-resistant seal, common on dive watches.",
        },
        {
          term: "Small Seconds",
          definition: "A subdial displaying seconds, typically at the 6 or 9 o'clock position.",
        },
      ],
    },
    {
      letter: "T",
      terms: [
        {
          term: "Tachymeter",
          definition:
            "A scale on a chronograph bezel or dial used to measure speed based on time traveled over a fixed distance.",
        },
        {
          term: "Tourbillon",
          definition:
            "A complex mechanism that places the escapement and balance wheel in a rotating cage to counteract the effects of gravity on timekeeping.",
        },
      ],
    },
    {
      letter: "W",
      terms: [
        {
          term: "Water Resistance",
          definition:
            "The ability of a watch to resist water ingress, measured in meters, ATM, or bar. Not the same as waterproof.",
        },
        {
          term: "Winding",
          definition: "The process of tightening the mainspring to store energy in a mechanical watch.",
        },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Watch Glossary</h1>
        <p className="mb-12 text-lg text-muted-foreground">
          A comprehensive guide to watch terminology, movements, and horological terms to help you understand the world
          of timepieces.
        </p>

        <div className="space-y-12">
          {glossaryTerms.map((section) => (
            <div key={section.letter} id={section.letter}>
              <h2 className="mb-6 border-b pb-2 font-serif text-3xl font-bold">{section.letter}</h2>
              <div className="space-y-6">
                {section.terms.map((item) => (
                  <div key={item.term}>
                    <h3 className="mb-2 text-xl font-semibold">{item.term}</h3>
                    <p className="text-muted-foreground">{item.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border bg-muted/50 p-6">
          <h3 className="mb-2 font-semibold">Can't find a term?</h3>
          <p className="text-sm text-muted-foreground">
            If you're looking for a specific watch term that's not listed here, please{" "}
            <a href="/contact" className="text-primary hover:underline">
              contact us
            </a>{" "}
            and we'll add it to our glossary.
          </p>
        </div>
      </div>
    </div>
  )
}
