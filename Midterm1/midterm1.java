import javax.swing.*;
import java.awt.*;
import java.util.ArrayList;
import java.util.List;

public class JetAnimation extends JPanel {
    private List<ImageIcon> jets = new ArrayList<>();
    private int currentJet = 0;
    private int x = 0;
    private int y = 150;

    public JetAnimation() {
        jets.add(new ImageIcon("jet1.png"));
        jets.add(new ImageIcon("jet2.png"));
        jets.add(new ImageIcon("jet3.png"));
        jets.add(new ImageIcon("jet4.png"));
        jets.add(new ImageIcon("jet5.png"));

        Timer timer = new Timer(50, e -> {
            currentJet = (currentJet + 1) % jets.size();
            x += 10;
            if (x > getWidth() + 100) {
                x = -100;
            }
            repaint();
        });
        timer.start();
    }

    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        jets.get(currentJet).paintIcon(this, g, x, y);
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Jet Animation");
        frame.add(new JetAnimation());
        frame.setSize(800, 300);
        frame.setVisible(true);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}
